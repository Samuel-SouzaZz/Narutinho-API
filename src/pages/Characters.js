import React, { useState, useEffect } from "react";
import { CardCharacters } from "../components/CardCharacters/CardCharacters";
import { CharactersContainer } from "./Styles/PagesStyle";
import axios from "axios";
import { BASE_URL_API, collections } from "../constans/urls";
import { InputFilter, LabelFilter, ButtonPagination } from "./Styles/PagesStyle"; 

export const Characters = () => {
  // Declaração dos estados do componente
  const [listCharacters, setListCharacters] = useState([]); // Lista de personagens
  const [currentPage, setCurrentPage] = useState(1); // Página atual
  const [searchTerm, setSearchTerm] = useState(""); // Termo de busca
  const [loading, setLoading] = useState(true); // Estado de carregamento
  const charactersPerPage = 10; // Número de personagens por página

  // Função assíncrona para buscar personagens da API
  const reqCharacters = async () => {
    try {
      // Faz a requisição para a API
      const response = await axios.get(
        `${BASE_URL_API}${collections.allCharacters}?limit=99999`
      );
      setListCharacters(response.data.characters); // Atualiza o estado com a lista de personagens
      setLoading(false); // Atualiza o estado de carregamento para falso
    } catch (error) {
      console.error("Error fetching data:", error); // Trata erro na requisição
    }
  };

  useEffect(() => {
    reqCharacters(); // Chama a função de requisição quando o componente é montado
  }, []); // Dependência vazia para executar apenas uma vez

  // Cálculo dos índices dos personagens a serem exibidos na página atual
  const indexOfLastCharacter = currentPage * charactersPerPage; // Índice do último personagem da página atual
  const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage; // Índice do primeiro personagem da página atual

  // Filtra a lista de personagens com base no termo de busca
  const filteredCharacters = listCharacters.filter((character) =>
    character.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Seleciona os personagens a serem exibidos na página atual
  const currentCharacters = filteredCharacters.slice(
    indexOfFirstCharacter,
    indexOfLastCharacter
  );

  // Função para lidar com a mudança no campo de busca
  const handleSearch = (event) => {
    setSearchTerm(event.target.value); // Atualiza o termo de busca
    setCurrentPage(1); // Reseta a página atual para 1
  };

  return (
    <CharactersContainer>
      <div>
        <LabelFilter>Pesquisar Pelo Nome:</LabelFilter>
        <InputFilter
          type="text"
          value={searchTerm} // Valor do input vinculado ao estado de busca
          onChange={handleSearch} // Chama a função handleSearch ao digitar
        />
      </div>

      {loading ? (
        <p>Loading...</p> // Exibe mensagem de carregamento se os dados estiverem sendo carregados
      ) : (
        <CardCharacters characters={currentCharacters} /> // Renderiza os personagens filtrados
      )}

      <div>
        {currentPage > 1 && (
          <ButtonPagination onClick={() => setCurrentPage(currentPage - 1)}>
            Anterior // Botão para voltar para a página anterior
          </ButtonPagination>
        )}
        {currentCharacters.length === charactersPerPage && (
          <ButtonPagination onClick={() => setCurrentPage(currentPage + 1)}>
            Próxima // Botão para ir para a próxima página
          </ButtonPagination>
        )}
      </div>
    </CharactersContainer>
  );
};

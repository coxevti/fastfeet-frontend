import React from 'react';
import PropTypes from 'prop-types';

import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { Container, PerPage, Detail, Button } from './styles';

const Pagination = ({
  funcPerPage,
  funcCurrentPage,
  currentPage,
  pages,
  numOfResults,
  perPage,
  from,
  to,
}) => {
  function handlePrevPage() {
    if (currentPage > 1) {
      funcCurrentPage(currentPage - 1);
    }
  }

  function handleNextPage() {
    if (currentPage < pages) {
      funcCurrentPage(currentPage + 1);
    }
  }
  function handlePerPage(e) {
    funcCurrentPage(1);
    funcPerPage(Number(e.target.value));
  }
  return (
    <Container>
      <PerPage value={perPage} onChange={handlePerPage}>
        <option value="10">10 itens por página</option>
        <option value="15">15 itens por página</option>
        <option value="20">20 itens por página</option>
        <option value="30">30 itens por página</option>
        <option value="50">50 itens por página</option>
      </PerPage>
      <Detail>
        Exibindo: {from} - {to} de {numOfResults} registros.
      </Detail>
      <div>
        <Button type="button" onClick={handlePrevPage} show={currentPage > 1}>
          <FiArrowLeft size={24} />
        </Button>
        <Button
          type="button"
          onClick={handleNextPage}
          show={currentPage < pages}
        >
          <FiArrowRight size={24} />
        </Button>
      </div>
    </Container>
  );
};

Pagination.propTypes = {
  funcPerPage: PropTypes.func.isRequired,
  funcCurrentPage: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  pages: PropTypes.number.isRequired,
  numOfResults: PropTypes.number.isRequired,
  perPage: PropTypes.number.isRequired,
  from: PropTypes.number.isRequired,
  to: PropTypes.number.isRequired,
};

export default Pagination;

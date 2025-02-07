import "bootstrap-icons/font/bootstrap-icons.css";
import { Container, Dropdown, DropdownButton } from "react-bootstrap";

const TVShows = () => {
  return (
    <Container className="mt-3">
      <div className="d-flex justify-content-between">
        <div className="d-flex">
          <h2 className="mb-4 text-light">TV Shows</h2>
          <div className="btn-group" role="group">
            <div className="dropdown ms-4 mt-2">
              <DropdownButton
                id="dropdown-basic-button"
                variant="secondary"
                size="sm"
                title="Genres"
                className="rounded-0"
              >
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Thriller</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Drama</Dropdown.Item>
              </DropdownButton>
            </div>
          </div>
        </div>
        <div>
          <i className="bi bi-grid icons text-light"></i>
          <i className="bi bi-grid-3x3 icons text-light"></i>
        </div>
      </div>
    </Container>
  );
};

export default TVShows;

import { CardHeader } from './styles/HeaderContainer';
import { MainContainer } from './styles/MainContainer';

function App() {
  return (
    <MainContainer>
      <CardHeader className="flex user">
        <img src="user.svg" className="user__img" alt="Usuário " />

        <div className="user__informations">
          <h4 className="user__name">Marvin McKinney</h4>
          <small className="user__email">marvin.mckinney@example.com</small>
        </div>
      </CardHeader>
    </MainContainer>
  );
}

export default App;

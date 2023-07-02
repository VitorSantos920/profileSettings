import { CardHeader } from './styles/HeaderContainer';
import { MainContainer } from './styles/MainContainer';
import { OptionsContainer } from './styles/OptionsContainer';
import { Option } from './components/Option';
import {
  Bell,
  Key,
  PersonArmsSpread,
  UserCircle,
  Devices,
  Question,
  UserSwitch,
  SignOut,
} from '@phosphor-icons/react';
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

      <OptionsContainer className="options">
        <Option
          title="Conta"
          optionItems={[
            {
              icon: UserCircle,
              text: 'Dados pessoais',
            },
            {
              icon: Key,
              text: 'Informações de Login',
            },
          ]}
        />
        <Option
          title="preferências"
          optionItems={[
            {
              icon: Bell,
              text: 'Notificações',
            },
            {
              icon: PersonArmsSpread,
              text: 'Acessibilidade',
            },
          ]}
        />
        <Option
          title="privacidade"
          optionItems={[
            {
              icon: Devices,
              text: 'Aparelhos conectados',
            },
            {
              icon: UserSwitch,
              text: 'Contas vinculadas',
            },
          ]}
        />
        <Option
          optionItems={[
            {
              icon: Question,
              text: 'Central de Ajuda',
            },
            {
              icon: SignOut,
              text: 'Sair',
            },
          ]}
          arrow={false}
        />
      </OptionsContainer>
    </MainContainer>
  );
}

export default App;

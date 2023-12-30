import { NewUserContainer } from './styled';

export default function NewUser() {
  return (
    <NewUserContainer>
      <h1 className="newUserTitle">Cadastrar Usuário</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Username</label>
          <input type="text" placeholder="Insira o nome..." />
        </div>

        <div className="newUserItem">
          <label>Email</label>
          <input type="email" placeholder="Insira email..." />
        </div>

        <div className="newUserItem">
          <label>Senha</label>
          <input type="password" placeholder="Insira senha..." />
        </div>

        <div className="newUserItem">
          <label>Telefone</label>
          <input type="text" placeholder="Insira telefone..." />
        </div>

        <div className="newUserItem">
          <label>Admin</label>
          <select
            className="newUserSelect"
            name="active"
            id="active"
            defaultValue="no"
          >
            <option value="yes">Sim</option>
            <option value="no">Não</option>
          </select>
        </div>
        <button className="newUserButton">Cadastrar</button>
      </form>
    </NewUserContainer>
  );
}

import ListofPlayers from './ListofPlayers';
import IndianPlayers from './IndianPlayers';

function App(){
const flag=true;
return flag?<ListofPlayers/>:<IndianPlayers/>;
}
export default App;

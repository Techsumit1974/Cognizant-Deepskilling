export default function IndianPlayers(){
const players=['A','B','C','D','E','F'];
const [odd1,even1,odd2,even2,odd3,even3]=players;
const odd=[odd1,odd2,odd3];
const even=[even1,even2,even3];
const T20=['Virat','Rohit'];
const Ranji=['Pujara','Rahane'];
const merged=[...T20,...Ranji];
return(<div>
<h2>Odd Team</h2><p>{odd.join(', ')}</p>
<h2>Even Team</h2><p>{even.join(', ')}</p>
<h2>Merged Players</h2><p>{merged.join(', ')}</p>
</div>);
}

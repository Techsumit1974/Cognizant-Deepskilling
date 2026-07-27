export default function ListofPlayers(){
const players=[
{name:'P1',score:90},{name:'P2',score:82},{name:'P3',score:65},
{name:'P4',score:77},{name:'P5',score:50},{name:'P6',score:88},
{name:'P7',score:69},{name:'P8',score:72},{name:'P9',score:95},
{name:'P10',score:60},{name:'P11',score:80}
];
const below70=players.filter(p=>p.score<70);
return(<div>
<h2>All Players</h2>
<ul>{players.map((p,i)=><li key={i}>{p.name} - {p.score}</li>)}</ul>
<h2>Players Below 70</h2>
<ul>{below70.map((p,i)=><li key={i}>{p.name} - {p.score}</li>)}</ul>
</div>);
}

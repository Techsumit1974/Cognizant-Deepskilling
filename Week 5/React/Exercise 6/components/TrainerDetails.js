import {useParams} from 'react-router-dom';import trainers from '../TrainersMock';
export default function TrainerDetails(){const {id}=useParams();const t=trainers.find(x=>x.TrainerId===+id);if(!t)return <h3>Not Found</h3>;
return <div><h2>{t.Name}</h2><p>{t.Email}</p><p>{t.Phone}</p><p>{t.Technology}</p><p>{t.Skills}</p></div>}
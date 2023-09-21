import Link from 'next/link';
import Conception from '../components/layout';
import { getSortedList } from '../lib/data';

export async function getStaticProps(){
  const AllMaterial = getSortedList();
  return{
    props:{ AllMaterial }
  };
}

  
export default function Maison( {AllMaterial} ){
  return(
    <Conception maison>
   <strong> <p>salut mon amie, cest next.js ici. </p></strong>
      <h1> Names in my list:</h1>
      <div className="list-group">
        {AllMaterial.map(
            ({id, name}) => (
             <Link key={id} href = {`/${id}`} className = "list-group-item list-group-item-action list-group-item-dark">
               {name}
             </Link>
            )
          )
        }
      </div>
    </Conception>
  );
}
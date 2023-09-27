import Link from 'next/link';
import Conception from '../components/layout';
import { playWithInfo } from '../lib/dataTwo';

export async function getStaticProps(){
  const AllMaterialTwo = playWithInfo();
  return{
    props:{ AllMaterialTwo }
  };
}

  
export default function NewCode( {AllMaterialTwo} ){
  return(
    <Conception>
      <h1> New Code</h1>
      <div>
        {AllMaterialTwo.map(
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
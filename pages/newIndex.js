import Link from 'next/link';
import Conception from '../components/layout';
import { getSortedList } from '../libdeux/dataTwo';

export async function getStaticProps(){
  const AllMaterialTwo = getSortedList();
  return{
    props:{ AllMaterial }
  };
}

export default function Maison( {AllMaterialTwo} ){
  return(
    <Conception maison>
   <strong> <p>word</h1>
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
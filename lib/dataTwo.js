import fs from 'fs';
import path from 'path';

const dataRoute = path.join( process.cwd(), 'dataTwo' );

export function playWithInfo(){
  
const InfoRoute = path.join(dataRoute, 'persons.json');

const JsonChaine = fs.readFileSync(InfoRoute, 'utf8');

const JsonTing = JSON.parse(JsonChaine);
  
JsonTing.sort(
function(a,b){
  return a.profession.localeCompare(b.profession);
}
);
  
  return JsonTing.map(
     function(itemTwo){
      return {
        id: itemTwo.id.toString(),
        profession: itemTwo.profession
      };
    }
  );
}

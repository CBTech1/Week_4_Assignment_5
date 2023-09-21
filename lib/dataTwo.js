import fs from 'fs';
import path from 'path';

const dataRoute = path.join( process.cwd(), 'dataTwo' );

export function playWithInfo(){
  
const InfoRoute = path.join(dataRoute, 'persons.json');

const JsonChaine = fs.readFileSync(InfoRoute, 'utf8');

const JsonTing = JSON.parse(JsonChaine);

  return JsonTing.map(
     function(item){
      return {
        id: item.id.toString(),
        profession: item.profession
      };
    }
  );
}

import "../styles/repositories.scss"


interface RepossitoryItemProps{

    repository:{
        name: string;
        description: string;
        html_url: string;
    },

}


export function RepositoryItem(props : RepossitoryItemProps){


    return(



        <li> 
          <strong>{props.repository?.name ?? 'Default'}</strong>
          <p>{props.repository.description}</p>
 
 
 
          <a href={props.repository.html_url}> Acessar repositorio</a>
     
       </li>

    );

}
import { useFetchData } from "./useFetchData";

export const FetchList = ({ endpoint }) => {
  const { data, isLoading } = useFetchData({ endpoint });
  console.log("Aqui estoy",useFetchData({ endpoint }));
  
  return (
    <>
      <ul>
        {isLoading ? 
          <p> Cargando... </p>
         : endpoint == "users" ? 
          data.map((item) => <li key={item.id}> {item.name}</li>)
        : 
          data.map((item) => <li key={item.id}>{item.email}</li>)
        }
      </ul>
    </>
  );
};

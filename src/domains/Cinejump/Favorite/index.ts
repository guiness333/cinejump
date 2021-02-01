import loginAPI from "../../../services/loginAPI";
import Response from './Response';
import GetMovie from '../../Movie/api/GetMovie';

export const AddFavorite = async (
  entity_id: String,
  type_id: String
): Promise<Response> => {
  let response = await loginAPI.post(`/favorites`, {
    entity_id: entity_id,
    type_id: type_id,
  });
  return response.data;
};
export const GetFavorites = async (): Promise<Response[]> => {
  let response = await loginAPI.get(`/favorites`);
  return response.data;
};

export const GetFavoritesDetails = async (
  rawResponse: Response[]
  ): Promise<any[]> => {
    const response = rawResponse.map(async (favorite: Response) =>{
      try{
        if(favorite.entity_id){
          const details = await GetMovie(favorite.entity_id)
          if(!details){
            console.log('Media not found')
          }
          return { 
            ...details,
            id: favorite.id,
            user_id: favorite.user_id,
            entity_id: favorite.entity_id,
            type_id: favorite.type_id,
          }
        }
      }catch(err) {
        console.log('error', err);
      }
    });

    const resolvedResponse = Promise.all(response);

    return resolvedResponse;
  }
  
  export const Favorites = async (): Promise<Response[]> => {
    const response = await GetFavorites();

    return GetFavoritesDetails(response);
  }
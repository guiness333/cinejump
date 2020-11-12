import loginAPI from "../../../services/loginAPI";
import Response from './Response';
export const AddFavorite = async (
  entity_id: String,
  type_id: String
): Promise<Response> => {
  let response = loginAPI.post(`/favorites`, {
    entity_id: entity_id,
    type_id: type_id,
  });
  return (await response).data;
};

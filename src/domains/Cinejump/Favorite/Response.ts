import MovieResponse from '../../Movie/api/NowPlaying/Response'
export default interface Response extends Omit<MovieResponse, 'id'>{
    id?: String,
    user_id?: String,
    entity_id?: number,
    type_id?: number,
    created_at?: String,
    updated_at?: String
}
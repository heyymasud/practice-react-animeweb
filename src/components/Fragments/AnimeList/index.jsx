import Anime from "../../Elements/Anime/Anime";

const AnimeList = (props) => {
  const { animes, onSelectedAnime } = props;

  return (
    <ul className="list list-anime">
      {animes?.map((anime) => (
        <Anime
          key={anime.mal_id}
          anime={anime}
          onSelectedAnime={onSelectedAnime}
        />
      ))}
    </ul>
  );
};

export default AnimeList;

import { MovieCard } from "./MovieCard";
import { List, ListRowRenderer, AutoSizer } from 'react-virtualized'

interface ContentProps {
  selectedGenre: {
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
  };

  movies: Array<{
    imdbID: string;
    Title: string;
    Poster: string;
    Ratings: Array<{
      Source: string;
      Value: string;
    }>;
    Runtime: string;
  }>;
}

export function Content({ selectedGenre, movies }: ContentProps) {

  const rowRenderer: ListRowRenderer = ({ key, index, style }) => {
    return (
      <div key={key} style={style} >
        <MovieCard
          key={movies[index].imdbID}
          title={movies[index].Title}
          poster={movies[index].Poster}
          runtime={movies[index].Runtime}
          rating={movies[index].Ratings[0].Value}
        />
      </div>
    );
  }

  return (
    <div className="container">
      <header>
        <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
      </header>

      <main >
        <div className="movies-list" >
          <AutoSizer>
            {({ height, width }) => (
              <div >
                <List
                  height={500}
                  rowCount={movies.length}
                  rowHeight={500}
                  rowRenderer={rowRenderer}
                  width={width}
                />
              </div>
            )}
          </AutoSizer>

        </div>
      </main>
    </div>
  )
}
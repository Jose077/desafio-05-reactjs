import { Button } from "./Button";
import { List, ListRowRenderer, AutoSizer } from 'react-virtualized'

interface SideBarProps {
  genres: Array<{
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
  }>;
  selectedGenreId: number;
  buttonClickCallback: (args: any) => void;
}

export function SideBar({
  genres,
  selectedGenreId,
  buttonClickCallback
}: SideBarProps) {

  const rowRenderer: ListRowRenderer = ({ key, index, style }) => {
    return (
      <div key={key} style={style}>
        <Button
          title={genres[index].title}
          iconName={genres[index].name}
          onClick={() => buttonClickCallback(genres[index].id)}
          selected={selectedGenreId === genres[index].id}
        />
      </div>
    );
  }

  return (
    <nav className="sidebar">

      <span>Watch<p>Me</p></span>

      <div className="buttons-container">

        <AutoSizer>
          {({ height, width }) => (
              <List
                height={500}
                rowCount={genres.length}
                rowHeight={80}
                rowRenderer={rowRenderer}
                width={width}
              />
          )}
        </AutoSizer>



      </div>

    </nav>
  )
}
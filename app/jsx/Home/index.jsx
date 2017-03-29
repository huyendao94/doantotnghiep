import {Tabs, Tab} from "material-ui/Tabs";
import NewSong from "./NewSong";
import NewAlbum from "./NewAlbum";
import HotMusic from "./HotMusic";
import Ranking from "./Ranking";

export default class Home extends PageComponent {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  componentDidMount() {
    this.setToolBar("Home");
  }

  // componentWillReceiveProps(nextProps) {

  // }

  // get locationState() {
  //   return Helper.getCurrentLocationState();
  // }
  render() {
    return (
      <div className="home-page">
        <div className="col-md-9">
          <div className="home-center">
            <div className="bxh">
              <Ranking />
            </div>
            <div className="new-song">
              <NewSong />
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <p>reference</p>
        </div>
      </div>
    )
  }
}

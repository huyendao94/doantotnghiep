import HeaderItem from './item.jsx';
import AddCircle from 'material-ui/svg-icons/content/add-circle';
import UserDrawer from "./../UserDrawer";
// import ChangeFieldDrawer from "./../ChangeFieldDrawer";
// import FavoriteDrawer from "./../FavoriteDrawer";
// import SearchDrawer from "./../SearchDrawer";

export default class HeaderMenu extends BaseComponent {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      linkTo: null,
    }

    this.showUserInfo = true;
    // this.showChangeField = false;
    // this.showFavorite = false;
    // this.showSearch = false;
    // switch (App.auth.role) {
    //   case "admin":
    //     this.showChangeField = true;
    //     if (App.auth.field_id) {
    //       this.showFavorite = true;
    //       this.showSearch = true;
    //     }
    //     break;
    //   case "manager":
    //   case "member":
    //     this.showFavorite = true;
    //     this.showSearch = true;
    //   default:
    //     this.showFavorite = false;
    //     this.showSearch = false;
    // }
  }

  handleOpenDrawer = (ref) => {
    this.refs[ref].open();
  }

  setToolBar = (title, linkTo) => {
    this.setState({
      title: title,
      linkTo: linkTo,
    });
  }

  renderButton = () => {
    return (
      <cm.RaisedButton
        icon={<AddCircle />}
        className="btn-header-menu big-icon"
        primary={true}
        label={t("common.create")}
        transitionTo={this.state.linkTo}
      />
    )
  }

  render() {
    return (
      <div className="header-bar">
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div className="row">
            <div className="col-lg-6 col-md-6 colsm-6 col-xs-12">
              <div className="row">
                <h4 className="link-tag-top-header">
                  <span><i className="material-icons">home</i></span>
                  {this.state.title}
                </h4>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 colsm-6 col-xs-12">
              <div className="row">
                <div className="col-lg-9 col-md-9 colsm-9 col-xs-12">
                  <div className="row">
                    <cm.TextField
                      fieldName="search"
                      name="search"
                      // errorText={error ? error[0] : null}
                      // value={this.state.data[fieldName] || ""}
                      // onChange={(event, value) => this.handleChangeTextField(fieldName, value)}
                    />
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 colsm-3 col-xs-12">
                  <div className="row">
                    <UserDrawer ref="userDrawer" />
                    <ul>
                      {this.showUserInfo ? <li><HeaderItem icon="perm_identity" className="pointer"
                        onClick={() => this.handleOpenDrawer("userDrawer")} /></li> : null}
                      {/*this.showChangeField ? <li><HeaderItem icon="swap_vert" className="pointer"
                        onClick={() => this.handleOpenDrawer("changeFieldDrawer")} /></li> : null*/}
                      {/*this.showFavorite ? <li><HeaderItem icon="favorite_border" className="pointer"
                        onClick={() => this.handleOpenDrawer("favoriteDrawer")} /></li> : null*/}
                      {/*this.showSearch ? <li><HeaderItem icon="search" className="pointer"
                        onClick={() => this.handleOpenDrawer("searchDrawer")} /></li> : null*/}
                      {this.state.linkTo ? <li className="btn-header-menu">{this.renderButton()}</li> : null}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            
            
            
            {/*<ChangeFieldDrawer ref="changeFieldDrawer" />
            <FavoriteDrawer ref="favoriteDrawer" />
            <SearchDrawer ref="searchDrawer" />*/}
          </div>
        </div>
      </div>
    )
  }
}

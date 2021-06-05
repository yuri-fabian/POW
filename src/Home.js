import React, { Component } from "react";
import Header from "./components/Header";
import Filter from "./components/Filter";
import Listings from "./components/Listing";
import listingsData from "./utils/listdata";
import Pagination from "./components/Pagination";
import "./styles/App.css";
import withAuthorization from "./auth/withAuthorization";
// import { db } from "./firebase";
class Home extends Component {
  constructor() {
    super();
    this.state = {
      name: "Adam",
      listingsData,
      neighborhood: "All",
      houseType: "All",
      bedrooms: 1,
      baths: 1,
      min_price: 0,
      max_price: 10000000,
      min_square_feet: 0,
      max_square_feet: 10000,
      pool: false,
      finished_basement: false,
      two_car_garage: false,
      filteredData: listingsData,
      populateFormsData: "",
      sort_by: "Lowest Price",
      view: "grid",
      search: "",
      currentPost: 1,
      postPerPage: 4,
    };
    this.change = this.change.bind(this);
    this.filteredData = this.filteredData.bind(this);
    this.populateForms = this.populateForms.bind(this);
    this.changeView = this.changeView.bind(this);
  }
  // user data
  state = {
    users: null,
    username: "",
  };

  componentWillMount() {
    var listingsData = this.state.listingsData.sort((a, b) => {
      return a.price - b.price;
    });
    this.setState({
      listingsData,
    });
  }

  change(event) {
    var name = event.target.name;
    var value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;

    this.setState(
      {
        [name]: value,
      },
      () => {
        console.log(this.state);
        this.filteredData();
      }
    );
  }

  changeView(viewName) {
    this.setState({
      view: viewName,
    });
  }

  filteredData() {
    var newData = this.state.listingsData.filter((item) => {
      return (
        item.price >= this.state.min_price &&
        item.price <= this.state.max_price &&
        item.floorSpace >= this.state.min_square_feet &&
        item.floorSpace <= this.state.max_square_feet &&
        item.rooms >= this.state.bedrooms &&
        item.bath >= this.state.baths
      );
    });
    // NEIGHBORHOOD FILTER
    if (this.state.neighborhood !== "All") {
      newData = newData.filter((item) => {
        return item.neighborhood === this.state.neighborhood;
      });
    }
    // HOUSE TYPE FILTER
    if (this.state.houseType !== "All") {
      newData = newData.filter((item) => {
        return item.houseType === this.state.houseType;
      });
    }
    // PRICE FILTER
    if (this.state.sort_by === "price-descending") {
      newData = newData.sort((a, b) => {
        return a.price - b.price;
      });
    }
    if (this.state.sort_by === "price-ascending") {
      newData = newData.sort((a, b) => {
        return b.price - a.price;
      });
    }
    // SEARCH FILTER
    if (this.state.search !== "") {
      newData = newData.filter((item) => {
        var neighborhood = item.neighborhood.toLowerCase();
        var searchText = this.state.search.toLowerCase();
        var i = neighborhood.match(searchText);

        if (i !== null) {
          return true;
        }
      });
    }
    // FILTER EXTRAS
    if (this.state.pool !== false) {
      newData = newData.filter((item) => {
        return item.pool === this.state.pool;
      });
    }
    if (this.state.finished_basement !== false) {
      newData = newData.filter((item) => {
        return item.finished_basement === this.state.finished_basement;
      });
    }
    if (this.state.two_car_garage !== false) {
      newData = newData.filter((item) => {
        return item.two_car_garage === this.state.two_car_garage;
      });
    }
    this.setState({
      filteredData: newData,
    });
  }

  populateForms() {
    // neighborhood
    var neighborhoods = this.state.listingsData.map((item) => {
      return item.neighborhood;
    });
    neighborhoods = new Set(neighborhoods);
    neighborhoods = [...neighborhoods];
    neighborhoods = neighborhoods.sort();

    // houseType
    var houseTypes = this.state.listingsData.map((item) => {
      return item.houseType;
    });
    houseTypes = new Set(houseTypes);
    houseTypes = [...houseTypes];
    houseTypes = houseTypes.sort();

    // rooms
    var beds = this.state.listingsData.map((item) => {
      return item.rooms;
    });
    beds = new Set(beds);
    beds = [...beds];
    beds = beds.sort();

    // baths
    var bathroom = this.state.listingsData.map((item) => {
      return item.bath;
    });
    bathroom = new Set(bathroom);
    bathroom = [...bathroom];
    bathroom = bathroom.sort();

    this.setState(
      {
        populateFormsData: {
          neighborhoods,
          houseTypes,
          beds,
          bathroom,
        },
      },
      () => {
        console.log(this.state);
      }
    );
  }

  render() {
    // console.log("dasdf", this.props.loggedUser);

    const indexOfLastTodo = this.state.currentPost * this.state.postPerPage;
    const indexOfFirstTodo = indexOfLastTodo - this.state.postPerPage;
    const currentTodos = this.state.filteredData.slice(
      indexOfFirstTodo,
      indexOfLastTodo
    );
    console.log(this.state.currentPost);
    const paginate = (pageNumber) =>
      this.setState({
        currentPost: pageNumber,
      });

    return (
      <div>
        <Header
          listingsData={this.state.filteredData}
          change={this.change}
          globalState={this.state}
          populateAction={this.populateForms}
        />
        <section id="content-area">
          <Filter
            listingsData={this.state.filteredData}
            change={this.change}
            globalState={this.state}
            populateAction={this.populateForms}
            changeView={this.changeView}
          />
          <Listings
            listingsData={currentTodos}
            change={this.change}
            globalState={this.state}
            populateAction={this.populateForms}
            changeView={this.changeView}
          />
        </section>
        <Pagination
          postPerPage={this.state.postPerPage}
          totalPost={this.state.listingsData.length}
          paginate={paginate}
        />
      </div>
    );
  }
}
const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(Home);

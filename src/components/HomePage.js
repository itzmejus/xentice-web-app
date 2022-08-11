import React from "react";
import "../styles/HomePage.css";
import Banner1 from "../images/banner1.png";
import Banner2 from "../images/banner2.png";
import shop1 from "../images/shop1.jpg";
import shop2 from "../images/shop2.jpg";
import shop3 from "../images/shop3.jpg";
import shop4 from "../images/shop4.jpg";
import Office1 from "../images/office1.jpg";
import Office2 from "../images/office2.jpg";
import Office3 from "../images/office3.jpg";
import Office4 from "../images/office4.jpg";
import land1 from "../images/land1.jpg";
import land2 from "../images/land2.jpg";
import land3 from "../images/land3.jpg";
import land4 from "../images/land4.jpg";
import build1 from "../images/build1.jpg";
import build2 from "../images/build2.jpg";
import build3 from "../images/build3.jpg";
import build4 from "../images/build4.jpg";
import meet1 from "../images/meet1.jpg";
import meet2 from "../images/meet2.jpg";
import meet3 from "../images/meet3.jpg";
import meet4 from "../images/meet4.jpg";

function HomePage() {
  return (
    <div class="container-fluid text-center mt-5  bg-white">
      <div class="row row-cols-9 mt-5 pb-4 hovers bgColor">
        <div class="col mt-5 ">
          <div className="text-center text-white">
            <i class="bi bi-basket-fill  fs-1 "></i>
            <h3 className="font-size">Commercial Shop</h3>
          </div>
        </div>
        <div class="col mt-5">
          <div className="text-center text-white">
            <i class="bi bi-building fs-1"></i>
            <h3 className="font-size">Commercial Office</h3>
          </div>
        </div>
        <div class="col mt-5">
          <div className="text-center text-white">
            <i class="bi bi-basket-fill fs-1"></i>
            <h3 className="font-size">Commercial Land</h3>
          </div>
        </div>
        <div class="col mt-5">
          <div className="text-center text-white">
            <i class="bi bi-building fs-1"></i>{" "}
            <h3 className="font-size">Commercial Building</h3>
          </div>
        </div>
        <div class="col mt-5">
          <div className="text-center text-white">
            <i class="bi bi-android2 fs-1"></i>
            <h3 className="font-size">Industrial Building</h3>
          </div>
        </div>
        <div class="col mt-5">
          <div className="text-center text-white">
            <i class="bi bi-arrow-through-heart-fill fs-1"></i>{" "}
            <h3 className="font-size">Industrial Land</h3>
          </div>
        </div>
        <div class="col mt-5">
          <div className="text-center text-white">
            <i class="bi bi-person-workspace fs-1"></i>{" "}
            <h3 className="font-size">Co-working Space</h3>
          </div>
        </div>
        <div class="col mt-5">
          <div className="text-center text-white">
            <i class="bi bi-file-earmark-lock-fill fs-1"></i>{" "}
            <h3 className="font-size">Private Office</h3>
          </div>
        </div>
        <div class="col mt-5">
          <div className="text-center text-white">
            <i class="bi bi-pc-display fs-1"></i>{" "}
            <h3 className="font-size">Meeting Room</h3>
          </div>
        </div>
      </div>
      <div className="row bgHome HeaderDetailContainer">
        <div className="col-xl-12 col-lg-12 col-sm-6 ">
          <div className="HeaderDetailContainer_cont ms-5">
            <div className="HeaderDetailContainer_data">
              <div className="HeaderDetailContainer_data_container">
                <p className="HeaderDetailContainer_data_header">
                  Choose from 25,00+ Spaces for your Business
                </p>
                <p className="HeaderDetailContainer_data_contenet">
                  Get inspired and find your perfect place
                </p>
                <div className="HeaderDetailContainer_data_sel_cont">
                  <select name="city" id="city">
                    <option value="">Looking for</option>
                    <option value="Commercial Shop">Commercial Shop</option>
                    <option value="Commercial Office">Commercial Office</option>
                    <option value="Commercial Land">Commercial Land</option>
                    <option value="Commercial Building">
                      Commercial Building
                    </option>
                    <option value="Industrial Building">
                      Industrial Building
                    </option>
                    <option value="Industrial Land">Industrial Land</option>
                    <option value="Co-working Space">Co-working Space</option>
                    <option value="Private Office">Private Office</option>
                    <option value="Meeting Room">Meeting Room</option>
                  </select>
                  <select name="city" id="city">
                    <option value="">Select City</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Noida">Noida</option>
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Bangalore">Bangalore</option>
                    <option value="Cochin">Cochin</option>
                    <option value="Chennai">Chennai</option>
                  </select>
                  <div
                    class="Button_cont text-white"
                    style={{ width: "100%", marginTop: "10px" }}
                  >
                    <h6>Search</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row row-cols-9 mt-5 pb-4 hovers bg-white ">
        <div class="col mt-5 ">
          <div className="text-center ">
            <i class="bi bi-basket-fill text-success  fs-1"></i>
            <h3 className="font-size">Builders</h3>
          </div>
        </div>
        <div class="col mt-5">
          <div className="text-center ">
            <i class="bi bi-building fs-1 text-primary"></i>
            <h3 className="font-size">Architects</h3>
          </div>
        </div>
        <div class="col mt-5">
          <div className="text-center ">
            <i class="bi bi-bank fs-1 text-danger"></i>
            <h3 className="font-size">Banking</h3>
          </div>
        </div>
        <div class="col mt-5">
          <div className="text-center ">
            <i class="bi bi-laptop-fill fs-1 text-warning"></i>
            <h3 className="font-size">IT Support</h3>
          </div>
        </div>
        <div class="col mt-5">
          <div className="text-center ">
            <i class="bi bi-hand-thumbs-up-fill fs-1 text-secondary"></i>
            <h3 className="font-size">Labours </h3>
          </div>
        </div>
        <div class="col mt-5">
          <div className="text-center ">
            <i class="bi bi-arrow-through-heart-fill fs-1 text-info"></i>{" "}
            <h3 className="font-size">Mentors</h3>
          </div>
        </div>
        <div class="col mt-5">
          <div className="text-center ">
            <i class="bi bi-person-workspace fs-1 text-danger"></i>{" "}
            <h3 className="font-size">Advocates</h3>
          </div>
        </div>
        <div class="col mt-5">
          <div className="text-center ">
            <i class="bi bi-lungs fs-1 text-success"></i>
            <h3 className="font-size">Insurance</h3>
          </div>
        </div>
        <div class="col mt-5">
          <div className="text-center ">
            <i class="bi bi-shop fs-1 text-primary"></i>
            <h3 className="font-size">Lifestyle</h3>
          </div>
        </div>
      </div>
      <div className="row d-flex mb-4 mt-4 ">
        <div className="col-xl-8 col-sm-6 ">
          <div className="ad1">
            <img src={Banner1} style={{ height: "350px" }} />
          </div>
        </div>
        <div className="col-xl-4 col-sm-6">
          <div className="ad1">
            <img src={Banner2} style={{ height: "350px" }} />
          </div>
        </div>
      </div>
      <div className="row ms-5 me-5 mb-4 mt-5 ">
        <div className="col-lg-12 col-md-6 col-sm-6 d-flex justify-content-between">
          <div className="text-center text-black  d-flex align-self-center ">
            <i class="bi bi-building fs-3"></i>
            <h3 className="fs-3 ps-3">Commercial Shop</h3>
          </div>
          <div>
            <h3 className="fs-6 text-primary">Explore More</h3>
          </div>
        </div>
      </div>
      <div className="row mb-5 ms-3 me-3">
        <div className="col-xl-3 col-md-6 col-sm-12 mt-5 ">
          <div class="card" style={{ width: "18rem" }}>
            <img
              src={shop1}
              class="card-img-top "
              style={{ height: "200px" }}
              alt="..."
            />
            <div class="card-body d-flex justify-content-between">
              <h5 class="card-title">Bone Avenue</h5>
              <i class="bi bi-heart fs-4"></i>
            </div>

            <div className="justify-content-start">
              <p className="text-danger fw-bold">Rs 11500/Month</p>{" "}
            </div>
            <button className="btn bg-primary text-white">Explore Now</button>
          </div>
        </div>
        <div className="col-xl-3 col-md-6 col-sm-12 mt-5 ">
          <div class="card" style={{ width: "18rem" }}>
            <img
              src={shop2}
              class="card-img-top "
              style={{ height: "200px" }}
              alt="..."
            />
            <div class="card-body d-flex justify-content-between">
              <h5 class="card-title">Commercial store</h5>
              <i class="bi bi-heart fs-4"></i>
            </div>
            <div className="justify-content-start">
              <p className="text-danger fw-bold">Rs 9000/Month</p>{" "}
            </div>
            <button className="btn bg-primary text-white">Explore Now</button>
          </div>
        </div>
        <div className="col-xl-3 col-md-6 col-sm-12 mt-5 ">
          <div class="card" style={{ width: "18rem" }}>
            <img
              src={shop3}
              class="card-img-top "
              style={{ height: "200px" }}
              alt="..."
            />
            <div class="card-body d-flex justify-content-between">
              <h5 class="card-title">Outlet</h5>
              <i class="bi bi-heart fs-4"></i>
            </div>
            <div className="justify-content-start">
              <p className="text-danger fw-bold">Rs 16000/Month</p>
            </div>
            <button className="btn bg-primary text-white">Explore Now</button>
          </div>
        </div>
        <div className="col-xl-3 col-md-6 col-sm-12 mt-5 ">
          <div class="card" style={{ width: "18rem" }}>
            <img
              src={shop4}
              class="card-img-top "
              style={{ height: "200px" }}
              alt="..."
            />
            <div class="card-body d-flex justify-content-between">
              <h5 class="card-title">Store</h5>
              <i class="bi bi-heart fs-4"></i>
            </div>
            <div className="justify-content-start">
              <p className="text-danger fw-bold">Rs 15000/Month</p>
            </div>
            <button className="btn bg-primary text-white">Explore Now</button>
          </div>
        </div>
      </div>
      {/* Commercial Office */}
      <div className="row ms-5 me-5 mb-4 ">
        <div className="col-lg-12 col-md-6 col-sm-6 d-flex justify-content-between">
          <div className="text-center text-black  d-flex align-self-center ">
            <i class="bi bi-map fs-3"></i>
            <h3 className="fs-3 ps-3">Commercial Office</h3>
          </div>
          <div>
            <h3 className="fs-6 text-primary">Explore More</h3>
          </div>
        </div>
      </div>
      <div className="row mb-5 ms-3 me-3">
        <div className="col-xl-3 col-md-6 col-sm-12 mt-5 ">
          <div class="card" style={{ width: "18rem" }}>
            <img
              src={Office1}
              class="card-img-top "
              style={{ height: "200px" }}
              alt="..."
            />
            <div class="card-body d-flex justify-content-between">
              <h5 class="card-title">Bone Avenue</h5>
              <i class="bi bi-heart fs-4"></i>
            </div>

            <div className="justify-content-start">
              <p className="text-danger fw-bold">Rs 5000/Sqr.ft</p>{" "}
            </div>
            <button className="btn bg-primary text-white">Explore Now</button>
          </div>
        </div>
        <div className="col-xl-3 col-md-6 col-sm-12 mt-5 ">
          <div class="card" style={{ width: "18rem" }}>
            <img
              src={Office2}
              class="card-img-top "
              style={{ height: "200px" }}
              alt="..."
            />
            <div class="card-body d-flex justify-content-between">
              <h5 class="card-title"> Avenue</h5>
              <i class="bi bi-heart fs-4"></i>
            </div>
            <div className="justify-content-start">
              <p className="text-danger fw-bold">Rs 600/Sqr.ft</p>{" "}
            </div>
            <button className="btn bg-primary text-white">Explore Now</button>
          </div>
        </div>
        <div className="col-xl-3 col-md-6 col-sm-12 mt-5 ">
          <div class="card" style={{ width: "18rem" }}>
            <img
              src={Office3}
              class="card-img-top "
              style={{ height: "200px" }}
              alt="..."
            />
            <div class="card-body d-flex justify-content-between">
              <h5 class="card-title">Office</h5>
              <i class="bi bi-heart fs-4"></i>
            </div>
            <div className="justify-content-start">
              <p className="text-danger fw-bold">Rs 20000/Month</p>
            </div>
            <button className="btn bg-primary text-white">Explore Now</button>
          </div>
        </div>
        <div className="col-xl-3 col-md-6 col-sm-12 mt-5 ">
          <div class="card" style={{ width: "18rem" }}>
            <img
              src={Office4}
              class="card-img-top "
              style={{ height: "200px" }}
              alt="..."
            />
            <div class="card-body d-flex justify-content-between">
              <h5 class="card-title">Evans office</h5>
              <i class="bi bi-heart fs-4"></i>
            </div>
            <div className="justify-content-start">
              <p className="text-danger fw-bold">Rs 1500000/</p>
            </div>
            <button className="btn bg-primary text-white">Explore Now</button>
          </div>
        </div>
      </div>
      {/* Commercial Land */}
      <div className="row ms-5 me-5 mb-4 ">
        <div className="col-lg-12 col-md-6 col-sm-6 d-flex justify-content-between">
          <div className="text-center text-black  d-flex align-self-center ">
            <i class="bi bi-house fs-3"></i>{" "}
            <h3 className="fs-3 ps-3">Commercial Land</h3>
          </div>
          <div>
            <h3 className="fs-6 text-primary">Explore More</h3>
          </div>
        </div>
      </div>
      <div className="row mb-5 ms-3 me-3">
        <div className="col-xl-3 col-md-6 col-sm-12 mt-5 ">
          <div class="card" style={{ width: "18rem" }}>
            <img
              src={land1}
              class="card-img-top "
              style={{ height: "200px" }}
              alt="..."
            />
            <div class="card-body d-flex justify-content-between">
              <h5 class="card-title">5th Avenue</h5>
              <i class="bi bi-heart fs-4"></i>
            </div>

            <div className="justify-content-start">
              <p className="text-danger fw-bold">Rs 15000/Sqr.ft</p>{" "}
            </div>
            <button className="btn bg-primary text-white">Explore Now</button>
          </div>
        </div>
        <div className="col-xl-3 col-md-6 col-sm-12 mt-5 ">
          <div class="card" style={{ width: "18rem" }}>
            <img
              src={land2}
              class="card-img-top "
              style={{ height: "200px" }}
              alt="..."
            />
            <div class="card-body d-flex justify-content-between">
              <h5 class="card-title"> Plot</h5>
              <i class="bi bi-heart fs-4"></i>
            </div>
            <div className="justify-content-start">
              <p className="text-danger fw-bold">Rs 3000/Sqr.ft</p>{" "}
            </div>
            <button className="btn bg-primary text-white">Explore Now</button>
          </div>
        </div>
        <div className="col-xl-3 col-md-6 col-sm-12 mt-5 ">
          <div class="card" style={{ width: "18rem" }}>
            <img
              src={land3}
              class="card-img-top "
              style={{ height: "200px" }}
              alt="..."
            />
            <div class="card-body d-flex justify-content-between">
              <h5 class="card-title">Green Land</h5>
              <i class="bi bi-heart fs-4"></i>
            </div>
            <div className="justify-content-start">
              <p className="text-danger fw-bold">Rs 9000/Sqr.ft</p>
            </div>
            <button className="btn bg-primary text-white">Explore Now</button>
          </div>
        </div>
        <div className="col-xl-3 col-md-6 col-sm-12 mt-5 ">
          <div class="card" style={{ width: "18rem" }}>
            <img
              src={land4}
              class="card-img-top "
              style={{ height: "200px" }}
              alt="..."
            />
            <div class="card-body d-flex justify-content-between">
              <h5 class="card-title">Agri Shore</h5>
              <i class="bi bi-heart fs-4"></i>
            </div>
            <div className="justify-content-start">
              <p className="text-danger fw-bold">Rs 10000/Sqr.ft</p>
            </div>
            <button className="btn bg-primary text-white">Explore Now</button>
          </div>
        </div>
      </div>
      <div className="row ms-5 me-5 mb-4 mt-5 ">
        <div className="col-lg-12 col-md-6 col-sm-6 d-flex justify-content-between">
          <div className="text-center text-black  d-flex align-self-center ">
            <i class="bi bi-building fs-3"></i>
            <h3 className="fs-3 ps-3">Commercial Building</h3>
          </div>
          <div>
            <h3 className="fs-6 text-primary">Explore More</h3>
          </div>
        </div>
      </div>
      <div className="row mb-5 ms-3 me-3">
        <div className="col-xl-3 col-md-6 col-sm-12 mt-5 ">
          <div class="card" style={{ width: "18rem" }}>
            <img
              src={build1}
              class="card-img-top "
              style={{ height: "200px" }}
              alt="..."
            />
            <div class="card-body d-flex justify-content-between">
              <h5 class="card-title">Anand apartment</h5>
              <i class="bi bi-heart fs-4"></i>
            </div>

            <div className="justify-content-start">
              <p className="text-danger fw-bold">Rs 10000/Sqr.ft</p>{" "}
            </div>
            <button className="btn bg-primary text-white">Explore Now</button>
          </div>
        </div>
        <div className="col-xl-3 col-md-6 col-sm-12 mt-5 ">
          <div class="card" style={{ width: "18rem" }}>
            <img
              src={build2}
              class="card-img-top "
              style={{ height: "200px" }}
              alt="..."
            />
            <div class="card-body d-flex justify-content-between">
              <h5 class="card-title">Square plot</h5>
              <i class="bi bi-heart fs-4"></i>
            </div>
            <div className="justify-content-start">
              <p className="text-danger fw-bold">Rs 9498/Sqr.ft</p>{" "}
            </div>
            <button className="btn bg-primary text-white">Explore Now</button>
          </div>
        </div>
        <div className="col-xl-3 col-md-6 col-sm-12 mt-5 ">
          <div class="card" style={{ width: "18rem" }}>
            <img
              src={build3}
              class="card-img-top "
              style={{ height: "200px" }}
              alt="..."
            />
            <div class="card-body d-flex justify-content-between">
              <h5 class="card-title">Building Space</h5>
              <i class="bi bi-heart fs-4"></i>
            </div>
            <div className="justify-content-start">
              <p className="text-danger fw-bold">Rs 12000/Sqr.ft</p>
            </div>
            <button className="btn bg-primary text-white">Explore Now</button>
          </div>
        </div>
        <div className="col-xl-3 col-md-6 col-sm-12 mt-5 ">
          <div class="card" style={{ width: "18rem" }}>
            <img
              src={build4}
              class="card-img-top "
              style={{ height: "200px" }}
              alt="..."
            />
            <div class="card-body d-flex justify-content-between">
              <h5 class="card-title">Apartment</h5>
              <i class="bi bi-heart fs-4"></i>
            </div>
            <div className="justify-content-start">
              <p className="text-danger fw-bold">Rs 16000/Sqr.ft</p>
            </div>
            <button className="btn bg-primary text-white">Explore Now</button>
          </div>
        </div>
      </div>
      <div className="row ms-5 me-5 mb-4 mt-5 ">
        <div className="col-lg-12 col-md-6 col-sm-6 d-flex justify-content-between">
          <div className="text-center text-black  d-flex align-self-center ">
            <i class="bi bi-building fs-3"></i>
            <h3 className="fs-3 ps-3">Meeting Room</h3>
          </div>
          <div>
            <h3 className="fs-6 text-primary">Explore More</h3>
          </div>
        </div>
      </div>
      <div className="row mb-5 ms-3 me-3">
        <div className="col-xl-3 col-md-6 col-sm-12 mt-5 ">
          <div class="card" style={{ width: "18rem" }}>
            <img
              src={meet1}
              class="card-img-top "
              style={{ height: "200px" }}
              alt="..."
            />
            <div class="card-body d-flex justify-content-between">
              <h5 class="card-title">Envice co-worki...</h5>
              <i class="bi bi-heart fs-4"></i>
            </div>
            <button className="btn bg-primary text-white">Explore Now</button>
          </div>
        </div>
        <div className="col-xl-3 col-md-6 col-sm-12 mt-5 ">
          <div class="card" style={{ width: "18rem" }}>
            <img
              src={meet2}
              class="card-img-top "
              style={{ height: "200px" }}
              alt="..."
            />
            <div class="card-body d-flex justify-content-between">
              <h5 class="card-title">Click collab</h5>
              <i class="bi bi-heart fs-4"></i>
            </div>
            <button className="btn bg-primary text-white">Explore Now</button>
          </div>
        </div>
        <div className="col-xl-3 col-md-6 col-sm-12 mt-5 ">
          <div class="card" style={{ width: "18rem" }}>
            <img
              src={meet3}
              class="card-img-top "
              style={{ height: "200px" }}
              alt="..."
            />
            <div class="card-body d-flex justify-content-between">
              <h5 class="card-title">Your space</h5>
              <i class="bi bi-heart fs-4"></i>
            </div>
            <button className="btn bg-primary text-white">Explore Now</button>
          </div>
        </div>
        <div className="col-xl-3 col-md-6 col-sm-12 mt-5 ">
          <div class="card" style={{ width: "18rem" }}>
            <img
              src={meet4}
              class="card-img-top "
              style={{ height: "200px" }}
              alt="..."
            />
            <div class="card-body d-flex justify-content-between">
              <h5 class="card-title">Align High</h5>
              <i class="bi bi-heart fs-4"></i>
            </div>
            <button className="btn bg-primary text-white">Explore Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

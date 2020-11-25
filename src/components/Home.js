import React, { Component } from "react";
import Image from "../img/iansarker.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa/index";

export default class Home extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-3 bg-light pt-3 pb-3">
          <div className="img_">
            <img className="img-responsive img_res_" src={Image} alt="Anis" />
          </div>
          <div className="section_">
            <h1>Anis Sarker</h1>
            <p>
              Very enthusiastic team player and fond of cherishing new
              technology
            </p>
            <ul className="list_type_none">
              <li className="list_item_">
                <a className="centerize_" href="#">
                  <div className="block_">
                    <FaGithub />
                  </div>
                </a>
              </li>
              <li className="list_item_">
                <a className="centerize_" href="#">
                  <div className="block_">
                    <FaLinkedin />
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-9 bg-light pt-3 pb-3">
          {/* About */}
          <div className="section_">
            <h2 className="header_">About</h2>
            <div className="pl-4 pr-4">
              <p>
                I am a Research Assistant at AGenCy Lab @IUB. I received my
                Bachelor of Science degree in Computer Science at Independent
                University, Bangladesh(IUB). I have a very broad research
                interest in Machine Learning and Computer Vision. My current
                research involves in land use land cover segmentation using high
                spatial resolution satellite images.
              </p>
            </div>
          </div>
          {/* Publications */}
          <div className="section_">
            <h2 className="header_">Publications</h2>
            <div className="pl-4 pr-4">
              <ul className="list-group">
                <li className="list-group-item sml_">
                  Qianwei Cheng, AKM Mahbubur Rahman, Anis Sarker, Abu Bakar
                  Siddik Nayem, Ovi Paul, Amin Ahsan Ali, M Ashraful Amin,
                  Ryosuke Shibasaki and Moinul Zaber, "Deep-learning coupled
                  with novel classification method to classify the urban
                  environment of the developing world", 2nd Internation
                  Conference on Signal Processing and Machine Learning, Zurich,
                  Switzerland, 2021
                </li>
                <li className="list-group-item sml_">
                  Fahim Faisal Niloy, Arif ., Abu Bakar Siddik Nayem, Anis
                  Sarker, Ovi Paul, M Ashraful Amin*, Amin Ahsan Ali, Moinul
                  Islam Zaber, AKM Mahbubur Rahman, "A Novel Disaster Image
                  Data-set and Characteristics Analysis using Attention Model",
                  25th International Conference on Pattern Recognition (ICPR),
                  Italy, 2020
                </li>
                <li className="list-group-item sml_">
                  A.B.S Nayeem, A Sarkar, A.A Ali, M.A. Amin, A.K.M Rahman,
                  "LULC Segmentation of RGB Satellite Image Using FCN-8", 3rd
                  SLAAI International Conference on Artificial Intelligence, Sri
                  Lanka , 2019
                </li>
              </ul>
            </div>
          </div>

          {/* Skills */}
          <div className="section_">
            <h2 className="header_">Skills</h2>
            <div className="pl-4 pr-4">
              <div id="accordion">
                <div className="card">
                  <div className="card-header card_header_" id="headingOne">
                    <h5 className="mb-0">
                      <h3
                        className="btn btn-link"
                        data-toggle="collapse"
                        data-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        Programming Languages
                      </h3>
                    </h5>
                  </div>

                  <div
                    id="collapseOne"
                    className="collapse show"
                    aria-labelledby="headingOne"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      <ul className="list-group">
                        <li className="list-group-item sml_">Python</li>
                        <li className="list-group-item sml_">MATLAB</li>
                        <li className="list-group-item sml_">Java</li>
                        <li className="list-group-item sml_">C/C++</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header card_header_" id="headingTwo">
                    <h5 className="mb-0">
                      <h3
                        className="btn btn-link collapsed"
                        data-toggle="collapse"
                        data-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        Web and Mobile App Development
                      </h3>
                    </h5>
                  </div>
                  <div
                    id="collapseTwo"
                    className="collapse"
                    aria-labelledby="headingTwo"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      <ul className="list-group">
                        <li className="list-group-item sml_">JavaScript</li>
                        <li className="list-group-item sml_">Android</li>
                        <li className="list-group-item sml_">NodeJS</li>
                        <li className="list-group-item sml_">
                          ReactJS/React Native
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header card_header_" id="headingThree">
                    <h5 className="mb-0">
                      <h3
                        className="btn btn-link collapsed"
                        data-toggle="collapse"
                        data-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        Framework/Libraries
                      </h3>
                    </h5>
                  </div>
                  <div
                    id="collapseThree"
                    className="collapse"
                    aria-labelledby="headingThree"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      <ul className="list-unstyled row">
                        <li className="list-group-item col-sm-4 col-md-4 col-xs-4 border-top sml_">
                          PyTorch
                        </li>
                        <li className="list-group-item col-sm-4 col-md-4 col-xs-4 border-top sml_">
                          TensorFlow
                        </li>
                        <li className="list-group-item col-sm-4 col-md-4 col-xs-4 border-top sml_">
                          Keras
                        </li>
                        <li className="list-group-item col-sm-4 col-md-4 col-xs-4 border-top sml_">
                          Numpy
                        </li>
                        <li className="list-group-item col-sm-4 col-md-4 col-xs-4 border-top sml_">
                          Matplotlib
                        </li>
                        <li className="list-group-item col-sm-4 col-md-4 col-xs-4 border-top sml_">
                          Seaborn
                        </li>
                        <li className="list-group-item col-sm-4 col-md-4 col-xs-4 border-top sml_">
                          OpenCV
                        </li>
                        <li className="list-group-item col-sm-4 col-md-4 col-xs-4 border-top sml_">
                          Pillow
                        </li>
                        <li className="list-group-item col-sm-4 col-md-4 col-xs-4 border-top sml_">
                          Scipy
                        </li>
                        <li className="list-group-item col-sm-4 col-md-4 col-xs-4 border-top sml_">
                          Scikit-learn
                        </li>
                        <li className="list-group-item col-sm-4 col-md-4 col-xs-4 border-top sml_">
                          Scikit-image
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header card_header_" id="headingFour">
                    <h5 className="mb-0">
                      <h3
                        className="btn btn-link collapsed"
                        data-toggle="collapse"
                        data-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        Others
                      </h3>
                    </h5>
                  </div>
                  <div
                    id="collapseFour"
                    className="collapse"
                    aria-labelledby="headingFour"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      <ul className="list-group">
                        <li className="list-group-item sml_">
                          Linux Shell Script (bash, zsh)
                        </li>
                        <li className="list-group-item sml_">LaTex</li>
                        <li className="list-group-item sml_">SSH</li>
                        <li className="list-group-item sml_">Tmux</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interests */}
          <div className="section_">
            <h2 className="header_">Interests</h2>
            <div className="pl-4 pr-4">
              <ul className="list_type_none">
                <li className="list_item__ spacing_ sml_">
                  Artificial Intelligence
                </li>
                <li className="list_item__ spacing_ sml_">Machine Learning</li>
                <li className="list_item__ spacing_ sml_">Data Science</li>
                <li className="list_item__ spacing_ sml_">Psychology</li>
                <li className="list_item__ spacing_ sml_">Philosophy</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

import React from "react";

export default function Publications() {
  return (
    <div className="section_">
      <header className="post-header_">
        <h2 className="post-title">Publications & Preprints</h2>
      </header>
      <ul className="list_type_none">
        <li className="box_icon_item">
          <span className="box pub_"></span>
          <span>Published</span>
        </li>
        <li className="box_icon_item">
          <span className="box pre_"></span>
          <span>Preprint</span>
        </li>
        <li className="box_icon_item">
          <span className="box acc_"></span>
          <span>Accepted</span>
        </li>
      </ul>
      <div className="post-body">
        <ul className="publications_list">
          <li className="publications_list_item">
            <a
              href="https://aircconline.com/csit/papers/vol11/csit110103.pdf"
              className="pub_"
            >
              Qianwei Cheng, AKM Mahbubur Rahman, Anis Sarker, Abu Bakar Siddik
              Nayem, Ovi Paul, Amin Ahsan Ali, M Ashraful Amin, Ryosuke
              Shibasaki and Moinul Zaber, "Deep-learning Coupled with Novel
              Classification Method to Classify the Urban Environment of the
              Developing World"
            </a>
          </li>
          <li className="publications_list_item">
            <a href="#" className="acc_">
              Fahim Faisal Niloy, Arif ., Abu Bakar Siddik Nayem, Anis Sarker,
              Ovi Paul, M Ashraful Amin*, Amin Ahsan Ali, Moinul Islam Zaber,
              AKM Mahbubur Rahman, "A Novel Disaster Image Data-set and
              Characteristics Analysis using Attention Model", 25th
              International Conference on Pattern Recognition (ICPR), Italy,
              2020
            </a>
          </li>
          <li className="publications_list_item">
            <a href="https://arxiv.org/abs/2008.10736" className="pre_">
              A.B.S Nayem, A Sarkar, A.A Ali, M.A. Amin, A.K.M M Rahman, "LULC
              Segmentation of RGB Satellite Image Using FCN-8"
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

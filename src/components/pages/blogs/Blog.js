import classes from "./blog.module.css";
import { Link } from "react-router-dom";
import Headerblog from "./components/Headerblog";
import Bloglist from "./components/Bloglist";
import Feature from "./components/Feature";
import Viewimg from "./components/ViewImg";
import { useState } from "react";
const Blog = () => {
  const data = [
    {
      id: 1,
      title: "Day 1: React JS Journey",
      image: "../../asset/1.jpg",
      desciption:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.           Expedita at corrupti nihil illum mollitia eius consectetur               aliquam natus vel ipsum minima, explicabo dolor necessitatibus               quos ipsam fuga id quod sint! Lorem ipsum dolor sit ame onsectetur,adipisicing elit. Mollitia voluptas fuga cumque                excepturi temporibus sunt sint dolor inventore numquam.                Blanditiis rem accusantium nobis officia, in laudanti inventore voluptatem voluptas amet!",
      date: "May 30, 2021",
    },
    {
      id: 2,
      title: "Day 2: React JS Journey",
      image: "../../asset/3.jpg",
      desciption:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.           Expedita at corrupti nihil illum mollitia eius consectetur               aliquam natus vel ipsum minima, explicabo dolor necessitatibus               quos ipsam fuga id quod sint! Lorem ipsum dolor sit ame onsectetur,adipisicing elit. Mollitia voluptas fuga cumque                excepturi temporibus sunt sint dolor inventore numquam.                Blanditiis rem accusantium nobis officia, in laudanti inventore voluptatem voluptas amet!",
      date: "May 30, 2021",
    },
    {
      id: 3,
      title: "Day 3: React JS Journey",
      image: "../../asset/2.jpg",
      desciption:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.           Expedita at corrupti nihil illum mollitia eius consectetur               aliquam natus vel ipsum minima, explicabo dolor necessitatibus               quos ipsam fuga id quod sint! Lorem ipsum dolor sit ame onsectetur,adipisicing elit. Mollitia voluptas fuga cumque                excepturi temporibus sunt sint dolor inventore numquam.                Blanditiis rem accusantium nobis officia, in laudanti inventore voluptatem voluptas amet!",
      date: "May 30, 2021",
    },
    {
      id: 4,
      title: "Day 4: React JS Journey",
      image: "../../asset/sample.jpg",
      desciption:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.           Expedita at corrupti nihil illum mollitia eius consectetur               aliquam natus vel ipsum minima, explicabo dolor necessitatibus               quos ipsam fuga id quod sint! Lorem ipsum dolor sit ame onsectetur,adipisicing elit. Mollitia voluptas fuga cumque                excepturi temporibus sunt sint dolor inventore numquam.                Blanditiis rem accusantium nobis officia, in laudanti inventore voluptatem voluptas amet!",
      date: "May 30, 2021",
    },
    {
      id: 5,
      title: "Day 5: React JS Journey",
      image: "../../asset/1.jpg",
      desciption:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.           Expedita at corrupti nihil illum mollitia eius consectetur               aliquam natus vel ipsum minima, explicabo dolor necessitatibus               quos ipsam fuga id quod sint! Lorem ipsum dolor sit ame onsectetur,adipisicing elit. Mollitia voluptas fuga cumque                excepturi temporibus sunt sint dolor inventore numquam.                Blanditiis rem accusantium nobis officia, in laudanti inventore voluptatem voluptas amet!",
      date: "May 30, 2021",
    },
    {
      id: 6,
      title: "Day 6: React JS Journey",
      image: "../../asset/3.jpg",
      desciption:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.           Expedita at corrupti nihil illum mollitia eius consectetur               aliquam natus vel ipsum minima, explicabo dolor necessitatibus               quos ipsam fuga id quod sint! Lorem ipsum dolor sit ame onsectetur,adipisicing elit. Mollitia voluptas fuga cumque                excepturi temporibus sunt sint dolor inventore numquam.                Blanditiis rem accusantium nobis officia, in laudanti inventore voluptatem voluptas amet!",
      date: "May 30, 2021",
    },
    ,
    {
      id: 7,
      title: "Day 7: React JS Journey",
      image: "../../asset/3.jpg",
      desciption:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.           Expedita at corrupti nihil illum mollitia eius consectetur               aliquam natus vel ipsum minima, explicabo dolor necessitatibus               quos ipsam fuga id quod sint! Lorem ipsum dolor sit ame onsectetur,adipisicing elit. Mollitia voluptas fuga cumque                excepturi temporibus sunt sint dolor inventore numquam.                Blanditiis rem accusantium nobis officia, in laudanti inventore voluptatem voluptas amet!",
      date: "May 30, 2021",
    },
  ];
  const [select, setSelect] = useState(0);
  const [viewimg, setImg] = useState("");
  const [modal, setModal] = useState(false);
  console.log(viewimg);

  return (
    <article>
      <Headerblog />
      <div className={classes.offsetHeader}>
        <div className="row">
          <div className="col-md-8 mt-5">
            <div className={classes.test}>
              <Feature
                title={data[select].title}
                image={data[select].image}
                description={data[select].desciption}
                date={data[select].date}
                viewimg={setImg}
                modal={setModal}
              />
            </div>
          </div>
          <div className={classes.listContent + " " + "col-md-4 mt-5"}>
            <div className={classes.fixedContent}>
              <div className={classes.scroll}>
                <div className={classes.bloglistTitle}>
                  <h2>List</h2>
                </div>
                {data.map((res, index) => (
                  <Bloglist
                    key={index}
                    title={res.title}
                    id={res.id}
                    desciption={res.desciption}
                    image={res.image}
                    select={setSelect}
                    data
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {modal ? (
        <Viewimg setModal={setModal} title={data[select].title} img={viewimg} />
      ) : (
        false
      )}
    </article>
  );
};

export default Blog;

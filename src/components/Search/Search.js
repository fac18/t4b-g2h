import React from "react";
import Img from "../styles/Img.style";
import * as SC from "./Search.style.js";

const SearchPage = ({ searchResult }) => {
  console.log("this is odd", searchResult);
  if (!searchResult) return <h1>No data yet</h1>;
  console.log(searchResult.records[0].fields.caption);
  const searchRecords = searchResult.records;

  return (
    <SC.SearchStyle>
      {searchRecords.map(record => (
        <SC.ContentContainer key={record.fields.image_id}>
          <SC.ImgContainer>
            <SC.ImgInContainer src={record.fields.url} />
          </SC.ImgContainer>
          <p>{record.fields.caption}</p>
        </SC.ContentContainer>
      ))}
    </SC.SearchStyle>
  );
  //   return (
  //     <SC.Search>
  //       {/* navbar */}

  //       <section>
  //         <article>
  //           <SC.MuseumContainer>
  //             <SC.ImgContainer>
  //               <Img src="https://images.unsplash.com/photo-1554907984-15263bfd63bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80" />
  //             </SC.ImgContainer>
  //             <p>Collection name</p>
  //           </SC.MuseumContainer>
  //           <SC.MuseumContainer>
  //             <SC.ImgContainer>
  //               <Img src="https://images.unsplash.com/photo-1554907984-15263bfd63bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80" />
  //             </SC.ImgContainer>
  //             <p>Collection name</p>
  //           </SC.MuseumContainer>
  //         </article>
  //         <article>
  //           <SC.MuseumContainer>
  //             <SC.ImgContainer>
  //               <Img src="https://images.unsplash.com/photo-1554907984-15263bfd63bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80" />
  //             </SC.ImgContainer>
  //             <p>Collection name</p>
  //           </SC.MuseumContainer>
  //           <SC.MuseumContainer>
  //             <SC.ImgContainer>
  //               <Img src="https://images.unsplash.com/photo-1554907984-15263bfd63bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80" />
  //             </SC.ImgContainer>
  //             <p>Collection name</p>
  //           </SC.MuseumContainer>
  //         </article>
  //         <article>
  //           <SC.MuseumContainer>
  //             <SC.ImgContainer>
  //               <Img src="https://images.unsplash.com/photo-1554907984-15263bfd63bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80" />
  //             </SC.ImgContainer>
  //             <p>Collection name</p>
  //           </SC.MuseumContainer>
  //           <SC.MuseumContainer>
  //             <SC.ImgContainer>
  //               <Img src="https://images.unsplash.com/photo-1547472529-f9765c78845c?ixlib=rb-1.2.1&auto=format&fit=crop&w=361&q=80" />
  //             </SC.ImgContainer>
  //             <p>Collection name</p>
  //           </SC.MuseumContainer>
  //         </article>
  //       </section>
  //       {/* footer */}
  //     </SC.Search>
  //   );
};

export default SearchPage;

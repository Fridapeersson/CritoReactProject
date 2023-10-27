import React from 'react'
import "./MeetOurTeam.scss";
import SectionTitle from '../../../generics/SectionTitle';
import Button from '../../../generics/Button';
import kristine from "../../../assets/images/meetOurTeam/kristinePalmer (1).jpeg";
import mark from "../../../assets/images/meetOurTeam/markAubri.jpeg";
import kimberly from "../../../assets/images/meetOurTeam/kimberlyHansen.jpeg";
import justin from "../../../assets/images/meetOurTeam/justinWilloman.jpeg";
import TeamCards from './TeamCards';

import cassandra from "../../../assets/images/meetOurTeam/reviewers/cassandraWarren (1).png";
import amanda from "../../../assets/images/meetOurTeam/reviewers/amandaTulling (1).png";
import jack from "../../../assets/images/meetOurTeam/reviewers/jackMcDogglas (1).png";
import ReviewBoxes from './ReviewBoxes';

const MeetOurTeam = () => {

    const teamCards = [
        {image: kristine, imageAltText: "Photograph of Kristine Palmer, Chef Operation Officer", title: "Kristine Palmer", description: "Chef Operation Officer"},

        {image: mark, imageAltText: "Photograph of Mark Aubri, Senior Consultant", title: "Mark Aubri", description: "Senior Consultant"},

        {image: kimberly, imageAltText: "Photograph of Kimberly Hansen, Senior Consultant", title: "Kimberly Hansen", description: "Senior Consultant"},

        {image: justin, imageAltText: "Photograph of Justin Willoman, Senior Tech Consultant", title: "Justin Willoman", description: "Senior Tech Consultant"}
    ]

    const reviewBoxes = [
        {reviewText: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt eligendi numquam voluptate", image: cassandra, imageAltText: "Picture of Cassandra Warren, reviewer", title: "Cassandra Warren", description: "Business Manager, Dorfus"},
        
        {reviewText: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt eligendi numquam voluptate", image: amanda, imageAltText: "Picture of Amanda Tilling, reviewer", title: "Amanda Tilling", description: "Senior Developer, Square"},
        
        {reviewText: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt eligendi numquam voluptate", image: jack, imageAltText: "Picture of Jack McDogglas, reviewer", title: "Jack McDogglas", description: "Key Account Manager, Gobona"}
    ]

  return (
    <section className="meetOurTeamSection section">
    <div className="container">
      <div className="meetOurTeam">
        <div className="sectionTitleWithButton">
          <div className="sectionTitle">
            <SectionTitle title="Meet Our Team" description="Experience Team Members" />
          </div>
          <div className="btn">
            <Button type="" text="Browse Team" url="meetourteam/browseteam" />
          </div>
        </div>

        <div className="team">
          <div className="cards">
            
            {
                teamCards.map((card, index) => (
                    <TeamCards key={index} image={card.image} imageAltText={card.imageAltText} title={card.title} description={card.description} />
                ))
            }

          </div>
          <div className="dots">
            <div className="dot">.</div>
            <div className="dot blackDot">.</div>
            <div className="dot">.</div>
            <div className="dot">.</div>
            <div className="dot">.</div>
          </div>
        </div>


                                    {/* <!-- What our client says --> */}

        <section className="whatOurClientSaysSection section">
          <div className="sectionTitle">
            <SectionTitle title="Testimonial" description="What Our Client Says" />
          </div>

          <div className="reviews">
            {
                reviewBoxes.map((box, index) => (
                    <ReviewBoxes key={index} reviewText={box.reviewText} image={box.image} imageAltText={box.imageAltText} title={box.title} description={box.description} />
                ))
            }
          </div>
          <div className="centerButton">
            <Button url="/meetourteam/testimonial/allreviews" type="dark" text="All Reviews" />
          </div>
        </section>
      </div>
    </div>
  </section>
  )
}

export default MeetOurTeam
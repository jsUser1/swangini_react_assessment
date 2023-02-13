import React, { useState } from 'react';
import NavTabStyled, { 
  NavTabItem, 
  Count,
  TabContent, 
  CardStyled, 
  FlexRowStyled, 
  LeftContent, 
  CircleStyled, 
  NameTextStyled,
  TitleTextStyled,
  LocationTextStyled,
  TabName,
  HorizontalLine,
  RightContent
} from "./style";
import emailImg from '../assets/images/emailImg.png';
const dataObject = [
    {
      heading: "Authors",
      data: [
        {
          name: "Neha Vohra",
          title: "Global service Recruiting",
          location: "Global services New Delhi",
          email: "test1@test.com"
        },
        {
          name: "Ravi Kumar",
          title: "Consultant",
          location: "Mumbai",
          email: "test2@test.com"
        },
        {
          name: "Soniya Jain",
          title: "Senior Consultant",
          location: "Boston",
          email: "test3@test.com"
        }
      ]
    },
    {
      heading: "OriginalRequestor",
      data: [
        {
          name: "Ravi Kumar",
          title: "Consultant",
          location: "Mumbai",
          email: "test4@test.com"
        },
        {
          name: "Soniya Jain",
          title: "Senior Consultant",
          location: "Boston",
          email: "test5@test.com"
        }
      ]
    }
  ]
const Home = () => {
        const tabs = dataObject.map(item => item['heading']);
        const [activeTab, setActive] = useState(tabs[0]);
        const selectedTabData = dataObject.filter(filtered => filtered.heading === activeTab)

        const changeActive = (activeTab) => {
          setActive(activeTab);
        };

    return (
        <>
            <NavTabStyled>
              {dataObject.map((tab, key) => (
                
                  <NavTabItem
                    key={key}
                    active={tab.heading.toString() === activeTab.toString()}
                    onClick={() =>changeActive(tab.heading)}
                  >
                    <TabName>
                      {(tab.heading.replace(/([A-Z])/g, ' $1').trim())} {tab.data && tab.data.length > 2 ? <Count> {tab.data.length} </Count>  : null}
                    </TabName>
                  </NavTabItem>
                
              ))}
            </NavTabStyled>
            <HorizontalLine/>
            <TabContent>
              {
                selectedTabData && selectedTabData[0].data.map((tabContent) => (
                  <CardStyled>
                    <FlexRowStyled>
                      <LeftContent>
                        <CircleStyled bgColor={tabContent.email === 'test3@test.com' ? '#AA4A44' : '#bbb'}/>
                        <a href={`mailto:${tabContent.email}`}>
                          <img src={emailImg}  style={{height: '25px', width: '25px'}} alt='Email'/>
                        </a>
                      </LeftContent>
                      <RightContent>
                        <NameTextStyled>{tabContent.name}</NameTextStyled>
                        <TitleTextStyled>{tabContent.title}</TitleTextStyled>
                        <LocationTextStyled>{tabContent.location}</LocationTextStyled>
                      </RightContent>
                    </FlexRowStyled>
                  </CardStyled>
                ))          
              }
            </TabContent>
        </>
    )
}
export default Home;
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

//Expansion block class to construct the info view of parks
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

function SimpleExpansionPanel({ alerts, parkId, desc, visitors, grounds, articles, fees, events, news, lessons, places, people, parkCode }) {
  const classes = useStyles();

  //Vars to see if each array is empty
  var alertsEmpty = alerts.length === 0;
  var groundsEmpty = grounds.length === 0;
  var centersEmpty = visitors.length === 0;
  var articlesEmpty = articles.length === 0;
  var lotsOfArticles = articles.length > 5;
  var eventsEmpty = events.length === 0;
  var newsEmpty = news.length === 0;
  var lessonsEmpty = lessons.length === 0;
  var placesEmpty = places.length === 0;
  var peopleEmpty = people.length === 0;
  var feesEmpty = fees.length === 0;

  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          {/* Code for the overview panel */}
          <Typography className={classes.heading}>Overview</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <div>
              {/* Provides information such as description, entrance fees, park data, and park id */}
              <p align="left"><strong>Description</strong></p>
              <p align="left">{desc}</p>
              {feesEmpty ? "" : <hr />}
              <p align="left"><strong>{feesEmpty ? "" : "Entrance Fees"}</strong></p>
              {fees.map(fee => (
                <p align="left" > <li>{fee.title}: ${fee.cost.substring(0, fee.cost.indexOf(".") + 3)}</li></p>
              ))}
              {feesEmpty ? "" : <hr />}
              <p align="left"><strong>Park Data</strong></p>
              <p align="left">Park Code: {parkCode}</p>
              <p align="left">Park ID: {parkId}</p>
            </div>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          {/* Code for the while you're there panel */}
          <Typography className={classes.heading}>While You're There</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <div>
              {/* Provides info on visitor centers, campgrounds, and events at the park */}

              <p align="left"><strong>{centersEmpty ? "" : "Visitor Centers"}</strong></p>
              {visitors.map(v => (
                <p align="left" > <li><strong>{v.name + ": "}</strong>{v.description}</li></p>
              ))}
              
              {centersEmpty ? "" : <hr />}


              <p align="left"><strong>{groundsEmpty ? "" : "Nearby Campgrounds"}</strong></p>
              {grounds.map(g => (
                <p align="left"><li><strong>{g.name + ": "}</strong>{g.description}</li></p>
              ))}

              {eventsEmpty || groundsEmpty ? "" : <hr />}

              <p align="left"><strong>{(eventsEmpty ? "" : "Events")}</strong></p>
              {events.map(eve => (
                <p align="left"> <li><strong>{eve.datestart !== eve.dateend ? (eve.datestart + " to " + eve.dateend + ": ") : eve.datestart + ": "}</strong>{eve.description.replace(/(<([^>]+)>)/ig, '')}</li></p>
              ))}

              {centersEmpty && groundsEmpty && eventsEmpty ? "There is no information available.": ""}
            </div>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          {/* Code for the things to know panel */}
          <Typography className={classes.heading}>Things to Know</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <div>
              {/* Provides info on alerts, the top 5 articles, and news */}
              <p align="left"><strong>Alerts:</strong></p>
              {alerts.map(a => (
                <p align="left"><li><strong>{a.title + ": "}</strong>{a.description}</li></p>
              ))}
              <p align="left">{(alertsEmpty ? "There are no alerts!" : "")}</p>

              {articlesEmpty && newsEmpty ? "" : <hr />}


              <p align="left"><strong>{articlesEmpty ? "" : "Articles:"} {(lotsOfArticles ? " (Top 5)" : "")}</strong></p>
              {articles.slice(0, 5).map(art => (
                <p align="left"><li><a href={art.url} target="_blank">{art.title}</a></li></p>
              ))}

              {newsEmpty ? "" : <hr />}

              <p align="left"><strong>{(newsEmpty ? "" : "News")}</strong></p>
              {news.map(n => (
                <p align="left"><li><a href={n.url} target="_blank">{n.title}</a></li></p>))
              }
            </div>

          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          {/* Code for the educational information panel */}
          <Typography className={classes.heading}>Educational Information</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <div>
              {/* Provides lesson plans, places, and relevant people information */}
              <p align="left"><strong>{(lessonsEmpty ? "" : "Lesson Plans:")}</strong></p>
              {lessons.map(l => (
                <p align="left"><li><strong>{l.title + ": "}</strong>{l.questionobjective}</li></p>
              ))}

              {lessonsEmpty ? "" : <hr />}

              <p align="left"><strong>{(placesEmpty ? "" : "Places:")}</strong></p>
              {places.map(place => (
                <p align="left"><li>{place.listingdescription}</li></p>
              ))}

              {peopleEmpty || placesEmpty ? "" : <hr />}


              <p align="left"><strong>{(peopleEmpty ? "" : "Relevant People:")}</strong></p>
              {people.map(person => (
                <p align="left"><li><strong>{person.title + ": "}</strong>{person.listingdescription}</li></p>
              ))}

              <p>{lessonsEmpty && placesEmpty && peopleEmpty ? "There is no educational information for this park." : ""}</p>
            </div>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

export default SimpleExpansionPanel;
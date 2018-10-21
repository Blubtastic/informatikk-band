import React, {Component} from 'react';

export default class AboutUs extends Component {

  render() {
    return(
      <div className="section" id="om-oss">
        <div className="sectionContent aboutUs">
          <h1>Hvem er vi?</h1>
          <p>
          Output er bandet tilhørende linjeforeningen Online, linjeforeningen for informatikk ved NTNU i Trondheim.
          Bandet har eksistert siden høsten 2017, og har i skrivende stund 8 medlemmer.
          <br/><br/>
          Bandet opptrer regelmessig på Online sine arrangementer og sporadisk andre steder.
          Vi holder til på NTNU Gløshaugen, og disponerer også våre øvingslokaler her. Vi spiller mye variert musikk, og beveger oss fort innom mange forskjellige sjangere i løpet av en opptreden.
          <br/><br/>
          Har du noen spørsmål, spiller du et instrument eller har du behov for god stemning på ditt arrangement? Kontakt oss gjerne på mail, band@online.ntnu.no
          </p>
        </div>
      </div>
    )
  }
}

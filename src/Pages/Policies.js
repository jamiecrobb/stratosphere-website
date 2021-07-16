import React from "react";

import Rocket from "../Global/Components/Images/Rocket.png";

import styles from "./Content.module.css";

const Policies = () => {
  return (
    <div>
      <h1>Data, Privacy and Safeguarding Policy for Stratosphere Talent Ltd</h1>
      <h2>What data we store</h2>
      <p>
        For each student that has signed up to the Stratosphere Talent platform,
        we store their name, email address, year group and age (where
        specified), school name (where specified), grades obtained in
        examinations and other qualifications, declared hobbies and interests
        and other usage data, in terms of details given via a pre-submitted
        cover letter and summative accuracy data. For each teacher, we store
        their name, email address, official title and school name. For each
        company we conduct business with, we store their name, contact details
        of a designated person employed by the company and other usage data, in
        terms of transaction details with Stratosphere Talent and summative
        accuracy data.
      </p>
      <h2>Who can access what data</h2>
      <p>
        Students can only gain access to their own data after log in. Accounts
        must initially be verified through an activation email. Teachers cannot
        access any data other than what they have already provided, so that it
        may be altered. Companies may have access to any data students provide
        to Stratosphere Talent. Some of the data is coded to ensure equality in
        the selection process. Only administrators can view data from all
        entities to allow the platform to operate smoothly. Currently this is
        only Jamie Robb, Taras Wolczuk and Emma Holling. Stratosphere Talent
        acts as data processors for students, teachers and companies. All
        administrators and processors of the data by Stratosphere Talent are
        subject to confidentiality for all school/company-owned data that will
        remain indefinitely even after cessation of services.
      </p>
      <h2>Stratosphere Talent's role as Data Processor</h2>
      <p>
        (We define Customer, to mean the students, the teachers and the
        companies that utilise our service.) In respect of personal data,
        schools/individuals acknowledge that: Stratosphere Talent acts as a
        Processor; and The Customer acts as the Controller. Stratosphere Talent
        only creates accounts upon the explicit instruction of the Customer and
        with their consent. Assessment data is generated by students using the
        platform, whereby forms are filled in providing details and
        acknowledging further use of said platform. Such data is only generated
        for the purposes of informing the Customer of their progress and linking
        Customers to arrange a placement. Where Stratosphere Talent receives an
        instruction from the school/individual that, in its reasonable opinion,
        infringes the GDPR, Stratosphere Talent will inform them. A separate
        data sharing agreement, clarifying Stratosphere Talent’s duties as a
        Data Processor, can soon be accessed here.
      </p>
      <h2>Fair Usage Policy</h2>
      <p>
        We are keen that Stratosphere Talent is used only with the aim of
        linking students with companies for work experience placements. We
        reserve the right to either temporarily or permanently suspend either
        teachers, students or companies, along with their accounts where: Any
        Denial of Service attacks, where the site is flooded with traffic with
        intent to cause disruption to services. There are excessive patterns of
        inappropriate behaviour of any form on the platform. Accounts receive
        warnings where they fail to respect this and are automatically suspended
        if these warnings are ignored. Where an account has been suspended and
        needs to be reinstated, contact to an administrator must be from the
        student (or their parent), teacher or company representative directly.
      </p>
      <h2>Your right to delete stored data and account deletion</h2>
      <p>
        Student accounts cannot be deleted by teachers at their respective
        school. Any user may request to have their account deleted via an email
        to taras@stratospheretalent.com. The email request must match the email
        address of the account being deleted. Stratosphere Talent will
        automatically purge inactive accounts where the user has not logged in
        over 2 years, or responded to the relevant emails sent out.
      </p>
      <h2>How your data is protected</h2>
      <p>
        Although the site is currently hosted internally, we plan for it to be
        hosted using Amazon Web Services in the future. The data will be stored
        in London, and AWS's compliance documentation can be found here. All
        data accessed via user accounts have appropriate checks to ensure the
        account has the correct permissions to view the data. In the unlikely
        event of any data breach, the nature of the breach, in addition to the
        resulting action to remedy such a breach, will be clearly communicated.
        The server will be equipped with an SSL certificate so that data is
        transmitted securely. You have the right to request an audit of data
        stored, for any relevant data. Stratosphere Talent will provide
        assistance to the best of its capacity should there be an issue
        surrounding data.
      </p>
      <h2>Disaster Recovery Plan</h2>
      <p>
        In compliance with EU legislation: "(a) the pseudonymisation and
        encryption of personal data;" As per "What data we store", the only
        personal data stored is email address, name and other academic and
        qualification data, along with assessment data purely based on usage of
        the platform. Passwords are currently not in use but we plan for them to
        be encrypted. (b) the ability to ensure the ongoing confidentiality,
        integrity, availability and resilience of processing systems and
        services; Any code which accesses the database ensures the correct
        permissions to view, modify or delete the data, as per "Who can access
        what data". (c) the ability to restore the availability and access to
        personal data in a timely manner in the event of a physical or technical
        incident; Backups are made regularly by administrators, who can restore
        data as necessary. (d) a process for regularly testing, assessing and
        evaluating the effectiveness of technical and organisational measures
        for ensuring the security of the processing. I review code as per (b) to
        ensure access to data is appropriate restricted as described. With
        regards to the effectiveness of the server, this is as per the future
        host provider's Amazon Web Service's own GDPR compliance.
      </p>
      <h2>ICO number</h2>
      <p>
        We currently are not registered with the ICO as the company has not
        existed until recently. However, we are in the process of researching
        this.
      </p>
      <h2>Video Conferencing Safeguarding</h2>
      <p>
        To ensure we maintain a safe environment for children, we have
        implemented measures to this effect. This includes: Providing a private
        meeting space via the video conferencing platform, with a password and
        meeting code only the customer knows. Giving the option for a
        parent/guardian to attend the meeting alongside their child to make sure
        that the child feels safe. Ensuring that all mentors leading the video
        conference are subject to regular enhanced DBS checks.
      </p>
      <h2>
        If you have further questions about safeguarding or data protection
      </h2>
      <p>
        Please contact taras@stratospheretalent.com for any further queries.
      </p>
    </div>
  );
};

export default Policies;

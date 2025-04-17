const Donate = () => {
  return (
    <>
      <div className="space-y-6">
        <h2 className="text-primary text-xl font-bold">
          Your Support Makes a Difference
        </h2>
        <p className="text-base font-medium">
          Every donation to Hope for Peace Women Initiative helps us continue
          our mission to uplift women, protect children, and empower
          communities. By donating, you become part of a movement that fosters
          hope, promotes equality, and builds a foundation for a brighter
          future. Your contribution, no matter the size, creates a lasting
          impact.
        </p>
        <h2 className="text-primary text-xl font-bold">
          Why Volunteer with Us?
        </h2>
        <div className="text-base font-medium">
          <p>
            Volunteering with Hope for Peace Women Initiative allows you to:
          </p>
          <ul className="list-disc list-inside">
            <li>
              <span className="font-bold">Make a Positive Impact</span> on
              underserved communities
            </li>
            <li>
              <span className="font-bold">Gain Valuable Experience</span> in
              community work, education, healthcare, and advocacy
            </li>
            <li>
              <span className="font-bold">
                Connect with Like-Minded Individuals
              </span>
              who share a passion for making a difference
            </li>
          </ul>
        </div>
        <h2 className="text-primary text-xl font-bold">
          Volunteer Opportunities
        </h2>
        <ol className="list-decimal list-outside">
          <li>
            <span className="font-bold">Community Outreach:</span>
            Assist in our Health Outreach and Back to School programs, providing
            essential supplies, medical checkups, and support to those in need.
          </li>
          <li>
            <span className="font-bold">Educational Support:</span>
            Help organize and conduct workshops, mentoring sessions, and
            training programs for women and youth.
          </li>
          <li>
            <span className="font-bold">Event Planning and Fundraising:</span>
            Contribute to planning events, campaigns, and fundraisers that help
            us reach our goals.
          </li>
          <li>
            <span className="font-bold">Environmental Initiatives:</span>
            Join our efforts in environmental preservation by participating in
            clean-up drives, tree planting, and awareness campaigns.
          </li>
        </ol>
        <h2 className="text-primary text-xl font-bold">How to Apply</h2>
        <p className="text-base font-medium">
          If you’re ready to make a difference, fill out our Volunteer
          Application Form [link to form]. Once submitted, our team will get in
          touch with more details about upcoming volunteer opportunities and how
          you can get involved.
        </p>
        <h2 className="text-primary text-xl font-bold">How to Donate</h2>
        <p className="text-base font-medium">
          You can donate securely through our online portal [link to donation
          page] or via bank transfer. For more information on how to donate or
          to explore other donation options, please email us at{' '}
          <a
            href="mailto:volunteer@hopeforpeacewomen.org"
            className="text-primary"
          >
            donate@hopeforpeacewomen.org
          </a>
          .
        </p>
      </div>
    </>
  )
}

export default Donate

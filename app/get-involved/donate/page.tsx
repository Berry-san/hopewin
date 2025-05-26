const Donate = () => {
  return (
    <>
      <div className="space-y-4">
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
          How Your Donation Helps{' '}
        </h2>
        <div className="text-base font-medium">
          <p>Your support enables us to: </p>
          <ul className="list-disc list-outside pl-6 space-y-3">
            <li>
              <span className="font-bold">Provide Educational Resources:</span>{' '}
              Supply school bags, books, and stationery to children in need
              through our Back to School Program.
            </li>
            <li>
              <span className="font-bold">Improve Access to Healthcare:</span>{' '}
              Fund medical checkups, provide essential medications, and promote
              health awareness in underserved communities through our Health
              Outreach
            </li>
            <li>
              <span className="font-bold">Empower Women and Youth:</span>{' '}
              Support training programs that equip women and young people with
              skills for financial independence and personal growth.{' '}
            </li>
          </ul>
        </div>
        <h2 className="text-primary text-xl font-bold">Ways to Donate</h2>
        <ol className="list-decimal list-outside pl-6 space-y-3">
          <li>
            <span className="font-bold">One-Time Donation:</span> Make a
            one-time gift to support our programs and initiatives.
          </li>
          <li>
            <span className="font-bold">Monthly Giving:</span> Join our
            community of monthly donors and provide sustained support that
            allows us to plan long-term projects.
          </li>
          <li>
            <span className="font-bold">Sponsor a Program:</span> Directly fund
            one of our specific programs, such as our Back to School Program or
            Health Outreach, to see your impact in action.
          </li>
        </ol>
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
        <h2 className="text-primary text-xl font-bold">Your Impact </h2>
        <div className="text-base font-medium">
          <p>When you donate, you will receive: </p>
          <ul className="list-disc list-outside pl-6 space-y-3">
            <li>
              <span className="font-bold">Regular Updates</span> on how your
              funds are used to make a difference.
            </li>
            <li>
              <span className="font-bold">Success Stories</span> showcasing the
              lives changed by your generosity.
            </li>
            <li>
              <span className="font-bold">Recognition</span> as a valued
              supporter of Hope for Peace Women Initiative.
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Donate

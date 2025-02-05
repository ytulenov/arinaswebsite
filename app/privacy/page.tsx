export default async function PostsPage() {
    return (
      <section className="pb-24 pt-40">
        <div className="container max-w-6xl">
          <h1 className="title mb-12">Privacy Policy</h1>
  
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold">1. Data Collection</h2>
              <p>
                We may collect the following information when you interact with our blog post listing page:
              </p>
              <ul className="list-disc pl-6">
                <li>Search queries you enter</li>
                <li>Your preferences and interactions with the page</li>
              </ul>
            </div>
  
            <div>
              <h2 className="text-xl font-bold">2. Data Usage</h2>
              <p>
                The data we collect is used for the following purposes:
              </p>
              <ul className="list-disc pl-6">
                <li>Providing you with relevant and personalized search results</li>
                <li>Improving the overall user experience and functionality of the blog post listing page</li>
              </ul>
            </div>
  
            <div>
              <h2 className="text-xl font-bold">3. Data Retention</h2>
              <p>
                We may store your search history and preferences for up to 30 days to enhance your user experience.
              </p>
            </div>
  
            <div>
              <h2 className="text-xl font-bold">4. Security</h2>
              <p>
                We take the following measures to protect your data:
              </p>
              <ul className="list-disc pl-6">
                <li>SSL/HTTPS encryption to secure data transmission</li>
                <li>Secure server storage to protect data at rest</li>
                <li>Restricted access controls to limit who can view your data</li>
              </ul>
            </div>
  
            <div>
              <h2 className="text-xl font-bold">5. User Rights</h2>
              <p>
                You have the right to:
              </p>
              <ul className="list-disc pl-6">
                <li>Access your data</li>
                <li>Request data correction or deletion</li>
                <li>Restrict the processing of your data</li>
              </ul>
              <p>
                To exercise these rights, please contact us at <a href="mailto:ytulenov@gmail.com" className="text-blue-500 hover:text-blue-700">ytulenov@gmail.com</a>.
              </p>
            </div>
  
            <p className="text-sm text-gray-500">
              Last Updated: {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </section>
    );
  }
  
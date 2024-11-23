import Head from "next/head";

export default function Home() {
  return (
    <div className="min-h-screen text-white bg-gradient-to-r from-gray-900 via-black to-gray-900 animate-gradient">
      <Head>
        <title>Score Champion AI - AI Sports Predictions</title>
        <meta
          name="description"
          content="Score Champion AI - Your AI-powered sports betting assistant."
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className="py-6 bg-gray-800 bg-opacity-80 backdrop-blur-md">
  <div className="container mx-auto flex justify-between items-center">
    <a href="/">
      <img
        src="/logo.png"
        alt="Score Champion AI Logo"
        className="h-24 w-auto" 
      />
    </a>
    <nav className="flex items-center space-x-6">
      <a
        href="https://x.com/ScoreChampionAI"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/xlogo.png"
          alt="X Logo"
          className="w-12 h-12 hover:scale-105 transition-transform"
        />
      </a>
      <a
        href="https://t.me/ScoreChampionBot"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/telegram.png"
          alt="Telegram Logo"
          className="w-8 h-8 hover:scale-105 transition-transform"
        />
      </a>
    </nav>
  </div>
</header>


      {/* Hero Section */}
      <main className="container mx-auto px-4 py-10">
        <section className="text-center">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400 mb-4">
            AI Sports Betting Predictions
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            Take your sports betting to the next level with AI-powered
            predictions. Gain insights, maximize your chances, and stay ahead of
            the game.
          </p>
          <a
            href="https://fun.virtuals.io/agents/0x2584c157b72f58eE1EC1c267f69fAc211B15D33E"
            className="drag-animate bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-3 rounded shadow-lg transform hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            Buy Now on VIRTUALS.IO
          </a>
        </section>

        {/* About Section */}
        <section className="mt-16">
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-8 rounded shadow-lg">
            <h3 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-6 text-center">
              About Score Champion AI
            </h3>
            <p className="text-gray-300 text-lg mb-8 leading-loose text-center">
              Score Champion AI is a cutting-edge Telegram bot designed to
              revolutionize sports betting. Powered by advanced artificial
              intelligence, Score Champion AI analyzes vast amounts of sports
              data to provide accurate and reliable predictions across multiple
              sports, including football, basketball, and more.
            </p>
            <div className="grid grid-cols-1 gap-8 items-center text-center">
              <ul className="space-y-8">
                <li className="flex items-center justify-center">
                  <div className="w-10 h-10 flex justify-center items-center text-2xl mr-4">
                    🤖
                  </div>
                  <span className="text-gray-300 text-lg leading-loose">
                    <strong>AI-Driven Insights:</strong> Accurate predictions powered by AI.
                  </span>
                </li>
                <li className="flex items-center justify-center">
                  <div className="w-10 h-10 flex justify-center items-center text-2xl mr-4">
                    📊
                  </div>
                  <span className="text-gray-300 text-lg leading-loose">
                    <strong>Multi-Sport Coverage:</strong> Predictions for football, basketball, and more.
                  </span>
                </li>
                <li className="flex items-center justify-center">
                  <div className="w-10 h-10 flex justify-center items-center text-2xl mr-4">
                    💡
                  </div>
                  <span className="text-gray-300 text-lg leading-loose">
                    <strong>User-Friendly:</strong> Access the bot easily via Telegram.
                  </span>
                </li>
                <li className="flex items-center justify-center">
                  <div className="w-10 h-10 flex justify-center items-center text-2xl mr-4">
                    ⏱️
                  </div>
                  <span className="text-gray-300 text-lg leading-loose">
                    <strong>Real-Time Updates:</strong> Get timely, accurate betting tips.
                  </span>
                </li>
              </ul>
            </div>
            <div className="text-center mt-12">
              <p className="text-lg text-gray-300 leading-loose">
                Don’t miss out on the future of sports betting. Join the growing
                community of Score Champion AI users and experience the power of AI
                predictions.
              </p>
              <a
                href="https://t.me/ScoreChampionBot"
                className="mt-8 inline-block bg-gradient-to-r from-purple-400 to-pink-400 text-white px-6 py-3 rounded-full text-lg font-bold shadow-lg hover:scale-105 transition-transform"
                target="_blank"
                rel="noopener noreferrer"
              >
                Try Telegram Bot
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-6 bg-gray-800 text-center bg-opacity-80 backdrop-blur-md">
        <p className="text-gray-400">
          © 2024 Score Champion AI. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}

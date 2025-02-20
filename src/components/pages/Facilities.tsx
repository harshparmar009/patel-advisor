const reviews = [
  { name: '- Shree Nivas', text: 'Patel Legal Advisors EXPERT Team helped me to manage my compliances and filing on time, C AND C EXPERT Team helped me to manage my compliances and filing on time. I am really impressed with their services. It was great experience to have this kind of co-operation' },
  { name: '- Jai Shree', text: 'Package suggested to us is Very Affordable is a Plus Point. I would definitely recommend their service' },
  { name: '- Anand', text: 'Patel Legal Advisors EXPERT provides phenomenal service and support to us. They have excellent team of employees who take great effort in satisfying our queries and requirements.' },
  { name: '- Ramesh', text: 'This firm really helped me a lot, their behavior is also so good.' },
];

export default function Facilities() {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-xl font-semibold text-gray-700">- Our Reviews -</h2>
          <h1 className="text-3xl font-bold text-gray-900">Clients Love Our Work</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-800">{review.name}</h3>
              <p className="text-gray-600 mt-2">{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

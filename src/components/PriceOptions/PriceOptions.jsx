import PriceOption from "../PriceOption/PriceOption"

function PriceOptions() {
  const PriceOptions= [
    {
      "id": "basic-plan",
      "name": "Basic Plan",
      "price": 20.99,
      "features": [
        "Access to gym equipment",
        "Locker room access",
        "Open gym hours",
        "Free Wi-Fi",
        "Access to vending machines",
        "Standard customer support"
      ]
    },
    {
      "id": "standard-plan",
      "name": "Standard Plan",
      "price": 35.99,
      "features": [
        "Access to gym equipment",
        "Locker room access",
        "Group fitness classes",
        "One personal training session per month",
        "Priority customer support",
        "Access to member-only events",
        "Discounts on merchandise"
      ]
    },
    {
      "id": "premium-plan",
      "name": "Premium Plan",
      "price": 49.99,
      "features": [
        "24/7 gym access",
        "Private locker access",
        "Unlimited group fitness classes",
        "Weekly personal training sessions",
        "Access to spa and sauna",
        "Complimentary fitness assessments",
        "Free guest passes",
        "Access to exclusive workshops and seminars",
        "Premium customer support"
      ]
    },
    {
      "id": "family-plan",
      "name": "Family Plan",
      "price": 79.99,
      "features": [
        "Access for up to 4 family members",
        "Full access to gym facilities",
        "Family group fitness classes",
        "Two personal training sessions per month",
        "Children's fitness programs",
        "Family-friendly events and activities",
        "Complimentary child care during workouts",
        "Access to family lounge area",
        "Discounts on additional family members"
      ]
    }
  ]
  
  return (
    <div className="mt-10">
      <h2 className='text-5xl text-pretty text-center'> Best Prices in the Town </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {
        PriceOptions.map(option => (
          <PriceOption key={option.id} option={option} />
        ))
      }
      </div>
    </div>
  )
}

export default PriceOptions
import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
    const priceOptions = [
        {
            "id": 1,
            "name": "Basic Membership",
            "price": 29.99,
            "features": [
                "Access to gym equipment",
                "Use of locker rooms",
                "Group fitness classes",
                "Free initial fitness assessment",
                "Free Wi-Fi access",
                "Monthly health and fitness newsletter"
            ]
        },
        {
            "id": 2,
            "name": "Standard Membership",
            "price": 49.99,
            "features": [
                "All Basic Membership features",
                "Unlimited access to group classes",
                "Personal training session (1 per month)",
                "Discount on merchandise",
                "Access to member-only events",
                "Nutrition workshop (1 per quarter)"
            ]
        },
        {
            "id": 3,
            "name": "Premium Membership",
            "price": 69.99,
            "features": [
                "All Standard Membership features",
                "Access to specialty classes (yoga, Pilates, etc.)",
                "Priority booking for personal training",
                "Access to sauna and steam room",
                "Unlimited guest passes (2 per month)",
                "Free access to fitness app"
            ]
        },
    ]
    return (
        <div className="m-12">
            <h2 className="text-5xl">Best Prices in the town</h2>
            <div className="grid lg:grid-cols-3 gap-6">
            {
                priceOptions.map(option => <PriceOption key={option.id} option ={option}></PriceOption>)
            }
            </div>
        </div>
    );
};

export default PriceOptions;
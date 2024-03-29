import { Option } from "../../widgets/option"

export const Pricing = () => {
  return (
    <>
      <section id="Pricing">
        <div className="container-info text-center">
          <h2 className="info-h text-medium">Choose Your Plan</h2>
          <p className="info-p font-normal mb-[60px]">Let's choose the package that is best for you and explore it happily and cheerfully.</p>
        </div>
        <div className="grid gap-[50px] grid-cols-1 md:grid-cols-3">
          <Option
            title="Free Plan"
            options={[
              'Unlimited Bandwitch', 'Encrypted Connection',
              'No Traffic Logs', 'Works on All Devices',
            ]}
            price="Free"
          />
          <Option
            title="Standard Plan"
            options={[
              'Unlimited Bandwitch', 'Encrypted Connection',
              'Yes Traffic Logs', 'Works on All Devices', 'Connect Anyware'
            ]}
            price="$9"
          />
          <Option
            title="Free Plan"
            options={[
              'Unlimited Bandwitch', 'Encrypted Connection',
              'No Traffic Logs', 'Works on All Devices', 'Connect Anyware', 'Get New Features'
            ]}
            price="$12"
          />
        </div>
      </section>
    </>
  )
}
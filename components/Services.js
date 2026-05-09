import { services, serviceBoundary } from '@/data/services';

export default function Services() {
  return (
    <section id="services" className="py-32 bg-bg-alt">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-24">
          <div className="max-w-2xl">
            <span className="font-mono text-[10px] uppercase tracking-widest text-accent-blue mb-6 block">Our Offerings</span>
            <h2 className="text-5xl md:text-6xl mb-0 leading-tight">Tailored Clinical Support for Every Mind.</h2>
          </div>
          <div className="max-w-xs text-sm text-text-muted italic border-l border-border pl-8 pb-2">
            {serviceBoundary}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white p-12 rounded-2xl border border-border hover:border-accent-blue/20 hover:shadow-2xl transition-all duration-500 group">
              <div className="text-4xl mb-8 group-hover:scale-110 transition-transform duration-500 origin-left inline-block">
                {service.icon}
              </div>
              <h3 className="text-2xl mb-6">{service.title}</h3>
              <p className="text-text-muted mb-8 text-[15px] leading-relaxed">
                {service.description}
              </p>
              <div className="flex items-center justify-between pt-8 border-t border-border">
                <span className="font-mono text-[10px] uppercase tracking-wider text-accent-teal">
                  {service.duration}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-wider text-text-muted">
                  {service.format}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

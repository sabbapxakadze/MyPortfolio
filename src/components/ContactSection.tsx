import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Linkedin, Github, Send, ArrowRight } from 'lucide-react';

interface ContactInfo {
  email: string;
  phone: string;
  location: string;
}

interface ContactSectionProps {
  title: string;
  subtitle: string;
  info: ContactInfo;
  languages: string;
}

export function ContactSection({ title, subtitle, info, languages }: ContactSectionProps) {
  return (
    <div className="max-w-4xl mx-auto text-center">
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
          {title}
        </h2>
        <p className="text-xl text-muted-foreground">
          {subtitle}
        </p>
      </div>
      
      <div className="grid gap-8">
        {/* Main contact card */}
        <Card className="p-8 card-gradient card-shadow border-0 group hover:scale-[1.02] transition-all duration-300">
          <CardContent className="p-0">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {/* Email */}
              <a 
                href={`mailto:${info.email}`}
                className="flex flex-col items-center p-6 rounded-xl hover:bg-primary/5 transition-all duration-300 group/item"
              >
                <div className="relative mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300">
                    <Mail className="h-8 w-8 text-primary" />
                  </div>
                  <div className="absolute -inset-2 bg-primary/20 rounded-full blur-xl opacity-0 group-hover/item:opacity-30 transition-opacity duration-300"></div>
                </div>
                <h3 className="font-bold text-foreground mb-2 text-lg">Email</h3>
                <p className="text-muted-foreground text-center break-all">{info.email}</p>
                <ArrowRight className="h-4 w-4 text-primary mt-2 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
              </a>
              
              {/* Phone */}
              <a 
                href={`tel:${info.phone}`}
                className="flex flex-col items-center p-6 rounded-xl hover:bg-primary/5 transition-all duration-300 group/item"
              >
                <div className="relative mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300">
                    <Phone className="h-8 w-8 text-primary" />
                  </div>
                  <div className="absolute -inset-2 bg-primary/20 rounded-full blur-xl opacity-0 group-hover/item:opacity-30 transition-opacity duration-300"></div>
                </div>
                <h3 className="font-bold text-foreground mb-2 text-lg">Phone</h3>
                <p className="text-muted-foreground">{info.phone}</p>
                <ArrowRight className="h-4 w-4 text-primary mt-2 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
              </a>
              
              {/* Location */}
              <div className="flex flex-col items-center p-6 rounded-xl group/item">
                <div className="relative mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300">
                    <MapPin className="h-8 w-8 text-primary" />
                  </div>
                  <div className="absolute -inset-2 bg-primary/20 rounded-full blur-xl opacity-0 group-hover/item:opacity-30 transition-opacity duration-300"></div>
                </div>
                <h3 className="font-bold text-foreground mb-2 text-lg">Location</h3>
                <p className="text-muted-foreground">{info.location}</p>
              </div>
            </div>
            
            {/* CTA Section */}
            <div className="pt-8 border-t border-border/50">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <Button 
                  size="lg" 
                  className="hero-gradient glow-shadow hover:scale-105 transition-bounce px-8 py-3 text-lg font-semibold"
                  asChild
                >
                  <a href={`mailto:${info.email}`}>
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </a>
                </Button>
                
                <div className="flex gap-4">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="hover:scale-110 transition-bounce border-2 w-14 h-14 p-0" 
                    asChild
                  >
                    <a href="https://linkedin.com/in/saba-pkhakadze" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-6 w-6" />
                    </a>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="hover:scale-110 transition-bounce border-2 w-14 h-14 p-0" 
                    asChild
                  >
                    <a href="https://github.com/sabbapxakadze" target="_blank" rel="noopener noreferrer">
                      <Github className="h-6 w-6" />
                    </a>
                  </Button>
                </div>
              </div>
              
              <div className="pt-4 border-t border-border/50">
                <p className="text-muted-foreground text-sm">{languages}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
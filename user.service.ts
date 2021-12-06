import { Service, ServiceBroker, Context} from 'moleculer'
import IMessage from './@types/message';

export default class UserService extends Service {
  public constructor(broker: ServiceBroker) {
    super(broker); 

    this.parseServiceSchema({
      name: 'user',
      actions: {
        hello: {  
          rest: {
            method: 'GET',
            path: '/hello',
        },
        async handler(): Promise<string> {
          return this.ActionHello()
        } 
      },
    },
      methods: {
        ActionHello(): IMessage {
          return {msg: 'Bem vindo'}
        }
      }
       
    })
  }
}
import configKeys from '../../../config';
import { createClient } from 'redis'

const connection = () => {
  const createRedisClient = () => {
    // const client = createClient({
    //     password: configKeys.REDIS_PASS,
    //     socket: {
    //         host: configKeys.REDIS_URL,
    //         port: configKeys.REDIS_PORT,
    //         connectTimeout: 10000,
    //     },
    //     legacyMode: false,
    // });
    const client = createClient({
        password: 'BDM4AkqtqfCcU7GPWB4pgXHF5xNAzIRg',
        socket: {
            host: 'redis-18441.c301.ap-south-1-1.ec2.cloud.redislabs.com',
            port: 18441,
            connectTimeout: 10000,
        }
    });
      
    //   client.on('error', err => console.log('Redis Client Error', err));
    //   await client.connect()
    client.connect().then(()=>{
      console.log("Redis connected successfully".bg_magenta)
    }).catch((err) => {
        console.log("hi")
      console.log(err)
    })
    return client
    
  };

  return {
    createRedisClient
  };
}

export default connection
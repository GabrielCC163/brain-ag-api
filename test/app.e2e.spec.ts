import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { PlantedCropsEnum } from '@modules/rural-producer/enum';

describe('RuralProducersController (e2e)', () => {
  let app: INestApplication;
  let producerTestId: string;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());
    await app.init();
  });

  it('should create a rural producer', async () => {
    const response = await request(app.getHttpServer())
      .post('/rural-producers')
      .send({
        document: '51726542000187',
        name: 'Elon',
        city: 'San Diego',
        state: 'CA',
        farmName: 'Sunshine Farm',
        farmTotalArea: 200,
        farmArableArea: 120,
        farmVegetationArea: 40,
        plantedCrops: [PlantedCropsEnum.COTTON, PlantedCropsEnum.CORN]
      })
      .set('Accept', 'application/json')
      .expect(201);

    expect(response.body.id).toBeDefined();
    producerTestId = response.body.id;
  });

  it('should get a list of rural producers', async () => {
    const response = await request(app.getHttpServer())
      .get('/rural-producers')
      .expect(200);

    expect(response.body.items).toBeDefined()
    expect(response.body.items.length).toBeGreaterThan(0);
  });

  it('should update a rural producer', async () => {
    const response = await request(app.getHttpServer())
      .put(`/rural-producers/${producerTestId}`)
      .send({
        name: 'Elon Musk',
        city: null
      })
      .expect(200);

    expect(response.body.name).toEqual('Elon Musk');
    expect(response.body.city).toBeDefined();
  });

  it('should remove a rural producer', async () => {
    await request(app.getHttpServer())
      .delete(`/rural-producers/${producerTestId}`)
      .expect(204);

    await request(app.getHttpServer())
      .get(`/rural-producers/${producerTestId}`)
      .expect(404);
  });

  afterAll(async () => {
    await app.close();
  });
});

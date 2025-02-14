import {
  Configuration,
  createConfiguration,
  EventsApi,
  RequestContext,
  ResponseContext,
  ServerConfiguration,
  TemplatesApi,
  TokensApi,
} from '../../../../codegen/crm/timeline/index'
import { Observable } from '../../../../codegen/crm/timeline/rxjsStub'
import { ApiClientConfigurator } from '../../../configuration/ApiClientConfigurator'
import IConfiguration from '../../../configuration/IConfiguration'
import ApiDecoratorService from '../../../services/ApiDecoratorService'

export default class TimelineDiscovery {
  public eventsApi: EventsApi
  public templatesApi: TemplatesApi
  public tokensApi: TokensApi

  constructor(config: IConfiguration) {
    const configuration = createConfiguration(
      ApiClientConfigurator.getParams<
        RequestContext,
        ResponseContext,
        Observable<RequestContext>,
        Observable<ResponseContext>,
        ServerConfiguration<{}>
      >(config, ServerConfiguration, Observable, Observable),
    )

    this.eventsApi = ApiDecoratorService.getInstance().apply<EventsApi, Configuration>(
      new EventsApi(configuration),
      configuration,
    )
    this.templatesApi = ApiDecoratorService.getInstance().apply<TemplatesApi, Configuration>(
      new TemplatesApi(configuration),
      configuration,
    )
    this.tokensApi = ApiDecoratorService.getInstance().apply<TokensApi, Configuration>(
      new TokensApi(configuration),
      configuration,
    )
  }
}

angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('trabajoSocialUNLaR.inicio', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/inicio.html',
        controller: 'inicioCtrl'
      }
    }
  })

  .state('trabajoSocialUNLaR.planDeEstudios', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/planDeEstudios.html',
        controller: 'planDeEstudiosCtrl'
      }
    }
  })

  .state('trabajoSocialUNLaR.perfilDelGraduado', {
    url: '/page6',
    views: {
      'side-menu21': {
        templateUrl: 'templates/perfilDelGraduado.html',
        controller: 'perfilDelGraduadoCtrl'
      }
    }
  })

  .state('trabajoSocialUNLaR.alcancesDelTTulo', {
    url: '/page32',
    views: {
      'side-menu21': {
        templateUrl: 'templates/alcancesDelTTulo.html',
        controller: 'alcancesDelTTuloCtrl'
      }
    }
  })

  .state('trabajoSocialUNLaR.horarios', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/horarios.html',
        controller: 'horariosCtrl'
      }
    }
  })

  .state('trabajoSocialUNLaR', {
    url: '/side-menu21',
    templateUrl: 'templates/trabajoSocialUNLaR.html',
    controller: 'trabajoSocialUNLaRCtrl'
  })

  .state('trabajoSocialUNLaR.bibliotecaDigital', {
    url: '/page4',
    views: {
      'side-menu21': {
        templateUrl: 'templates/bibliotecaDigital.html',
        controller: 'bibliotecaDigitalCtrl'
      }
    }
  })

  .state('trabajoSocialUNLaR.1AO', {
    url: '/page8',
    views: {
      'side-menu21': {
        templateUrl: 'templates/1AO.html',
        controller: '1AOCtrl'
      }
    }
  })

  .state('trabajoSocialUNLaR.programasDeCTedra', {
    url: '/page12',
    views: {
      'side-menu21': {
        templateUrl: 'templates/programasDeCTedra.html',
        controller: 'programasDeCTedraCtrl'
      }
    }
  })

  .state('trabajoSocialUNLaR.2AO', {
    url: '/page9',
    views: {
      'side-menu21': {
        templateUrl: 'templates/2AO.html',
        controller: '2AOCtrl'
      }
    }
  })

  .state('trabajoSocialUNLaR.3AO', {
    url: '/page10',
    views: {
      'side-menu21': {
        templateUrl: 'templates/3AO.html',
        controller: '3AOCtrl'
      }
    }
  })

  .state('trabajoSocialUNLaR.4AO', {
    url: '/page42',
    views: {
      'side-menu21': {
        templateUrl: 'templates/4AO.html',
        controller: '4AOCtrl'
      }
    }
  })

  .state('trabajoSocialUNLaR.5AO', {
    url: '/page43',
    views: {
      'side-menu21': {
        templateUrl: 'templates/5AO.html',
        controller: '5AOCtrl'
      }
    }
  })

  .state('trabajoSocialUNLaR.acercaDeLaApp', {
    url: '/page5',
    views: {
      'side-menu21': {
        templateUrl: 'templates/acercaDeLaApp.html',
        controller: 'acercaDeLaAppCtrl'
      }
    }
  })

  .state('trabajoSocialUNLaR.calendarioAcadMico', {
    url: '/page11',
    views: {
      'side-menu21': {
        templateUrl: 'templates/calendarioAcadMico.html',
        controller: 'calendarioAcadMicoCtrl'
      }
    }
  })

  .state('trabajoSocialUNLaR.introducciNAlTrabajoSocial', {
    url: '/page13',
    views: {
      'side-menu21': {
        templateUrl: 'templates/introducciNAlTrabajoSocial.html',
        controller: 'introducciNAlTrabajoSocialCtrl'
      }
    }
  })

  .state('trabajoSocialUNLaR.metodologADeLaInvestigaciNSocialI', {
    url: '/page14',
    views: {
      'side-menu21': {
        templateUrl: 'templates/metodologADeLaInvestigaciNSocialI.html',
        controller: 'metodologADeLaInvestigaciNSocialICtrl'
      }
    }
  })

  .state('trabajoSocialUNLaR.fundamentosSociolGicosI', {
    url: '/page15',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fundamentosSociolGicosI.html',
        controller: 'fundamentosSociolGicosICtrl'
      }
    }
  })

  .state('trabajoSocialUNLaR.antropologACulturalYSocial', {
    url: '/page16',
    views: {
      'side-menu21': {
        templateUrl: 'templates/antropologACulturalYSocial.html',
        controller: 'antropologACulturalYSocialCtrl'
      }
    }
  })

  .state('trabajoSocialUNLaR.fundamentosPsicolGicosI', {
    url: '/page17',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fundamentosPsicolGicosI.html',
        controller: 'fundamentosPsicolGicosICtrl'
      }
    }
  })

  .state('trabajoSocialUNLaR.fundamentosDeLaSaludAplicados', {
    url: '/page18',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fundamentosDeLaSaludAplicados.html',
        controller: 'fundamentosDeLaSaludAplicadosCtrl'
      }
    }
  })

  .state('trabajoSocialUNLaR.trabajoSocialPersonalizadoYFamiliar', {
    url: '/page19',
    views: {
      'side-menu21': {
        templateUrl: 'templates/trabajoSocialPersonalizadoYFamiliar.html',
        controller: 'trabajoSocialPersonalizadoYFamiliarCtrl'
      }
    }
  })

  .state('trabajoSocialUNLaR.metodologADeLaInvestigaciNSocialII', {
    url: '/page20',
    views: {
      'side-menu21': {
        templateUrl: 'templates/metodologADeLaInvestigaciNSocialII.html',
        controller: 'metodologADeLaInvestigaciNSocialIICtrl'
      }
    }
  })

  .state('trabajoSocialUNLaR.expresiNEscritaYOral', {
    url: '/page21',
    views: {
      'side-menu21': {
        templateUrl: 'templates/expresiNEscritaYOral.html',
        controller: 'expresiNEscritaYOralCtrl'
      }
    }
  })

  .state('trabajoSocialUNLaR.camposProfesionales', {
    url: '/page22',
    views: {
      'side-menu21': {
        templateUrl: 'templates/camposProfesionales.html',
        controller: 'camposProfesionalesCtrl'
      }
    }
  })

  .state('trabajoSocialUNLaR.fundamentosSocioJurDicosAplicados', {
    url: '/page23',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fundamentosSocioJurDicosAplicados.html',
        controller: 'fundamentosSocioJurDicosAplicadosCtrl'
      }
    }
  })

  .state('trabajoSocialUNLaR.supervisiNEnTrabajoSocial', {
    url: '/page24',
    views: {
      'side-menu21': {
        templateUrl: 'templates/supervisiNEnTrabajoSocial.html',
        controller: 'supervisiNEnTrabajoSocialCtrl'
      }
    }
  })

  .state('trabajoSocialUNLaR.fundamentosSociolGicosII', {
    url: '/page25',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fundamentosSociolGicosII.html',
        controller: 'fundamentosSociolGicosIICtrl'
      }
    }
  })

  .state('trabajoSocialUNLaR.trabajoSocialDeGrupo', {
    url: '/page26',
    views: {
      'side-menu21': {
        templateUrl: 'templates/trabajoSocialDeGrupo.html',
        controller: 'trabajoSocialDeGrupoCtrl'
      }
    }
  })

  .state('trabajoSocialUNLaR.trabajoSocialInstitucional', {
    url: '/page27',
    views: {
      'side-menu21': {
        templateUrl: 'templates/trabajoSocialInstitucional.html',
        controller: 'trabajoSocialInstitucionalCtrl'
      }
    }
  })

  .state('trabajoSocialUNLaR.prCticaPreProfesionalI', {
    url: '/page28',
    views: {
      'side-menu21': {
        templateUrl: 'templates/prCticaPreProfesionalI.html',
        controller: 'prCticaPreProfesionalICtrl'
      }
    }
  })

  .state('trabajoSocialUNLaR.fundamentosPsicolGicosII', {
    url: '/page29',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fundamentosPsicolGicosII.html',
        controller: 'fundamentosPsicolGicosIICtrl'
      }
    }
  })

  .state('trabajoSocialUNLaR.epistemologAEnTrabajoSocial', {
    url: '/page30',
    views: {
      'side-menu21': {
        templateUrl: 'templates/epistemologAEnTrabajoSocial.html',
        controller: 'epistemologAEnTrabajoSocialCtrl'
      }
    }
  })

  .state('trabajoSocialUNLaR.historiaSocialArgentina', {
    url: '/page31',
    views: {
      'side-menu21': {
        templateUrl: 'templates/historiaSocialArgentina.html',
        controller: 'historiaSocialArgentinaCtrl'
      }
    }
  })

  .state('trabajoSocialUNLaR.trabajoSocialComunitarioYDesarrolloLocal', {
    url: '/page33',
    views: {
      'side-menu21': {
        templateUrl: 'templates/trabajoSocialComunitarioYDesarrolloLocal.html',
        controller: 'trabajoSocialComunitarioYDesarrolloLocalCtrl'
      }
    }
  })

  .state('trabajoSocialUNLaR.prCticaPreProfesionalII', {
    url: '/page34',
    views: {
      'side-menu21': {
        templateUrl: 'templates/prCticaPreProfesionalII.html',
        controller: 'prCticaPreProfesionalIICtrl'
      }
    }
  })

  .state('trabajoSocialUNLaR.planificaciNPolTicasSocialesYGestiNSocial', {
    url: '/page35',
    views: {
      'side-menu21': {
        templateUrl: 'templates/planificaciNPolTicasSocialesYGestiNSocial.html',
        controller: 'planificaciNPolTicasSocialesYGestiNSocialCtrl'
      }
    }
  })

  .state('trabajoSocialUNLaR.informTica', {
    url: '/page36',
    views: {
      'side-menu21': {
        templateUrl: 'templates/informTica.html',
        controller: 'informTicaCtrl'
      }
    }
  })

  .state('trabajoSocialUNLaR.fundamentosEconMicosAplicados', {
    url: '/page41',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fundamentosEconMicosAplicados.html',
        controller: 'fundamentosEconMicosAplicadosCtrl'
      }
    }
  })

  .state('trabajoSocialUNLaR.estadSticaYDemografA', {
    url: '/page45',
    views: {
      'side-menu21': {
        templateUrl: 'templates/estadSticaYDemografA.html',
        controller: 'estadSticaYDemografACtrl'
      }
    }
  })

  .state('trabajoSocialUNLaR.prCticaPreProfesionalIII', {
    url: '/page46',
    views: {
      'side-menu21': {
        templateUrl: 'templates/prCticaPreProfesionalIII.html',
        controller: 'prCticaPreProfesionalIIICtrl'
      }
    }
  })

  .state('trabajoSocialUNLaR.seminariosDeTrabajoFinal', {
    url: '/page47',
    views: {
      'side-menu21': {
        templateUrl: 'templates/seminariosDeTrabajoFinal.html',
        controller: 'seminariosDeTrabajoFinalCtrl'
      }
    }
  })

  .state('trabajoSocialUNLaR.idiomaInglS', {
    url: '/page48',
    views: {
      'side-menu21': {
        templateUrl: 'templates/idiomaInglS.html',
        controller: 'idiomaInglSCtrl'
      }
    }
  })

  .state('trabajoSocialUNLaR.operativaI', {
    url: '/page49',
    views: {
      'side-menu21': {
        templateUrl: 'templates/operativaI.html',
        controller: 'operativaICtrl'
      }
    }
  })

  .state('trabajoSocialUNLaR.operativaII', {
    url: '/page50',
    views: {
      'side-menu21': {
        templateUrl: 'templates/operativaII.html',
        controller: 'operativaIICtrl'
      }
    }
  })

  .state('trabajoSocialUNLaR.horarioIngreso', {
    url: '/page37',
    views: {
      'side-menu21': {
        templateUrl: 'templates/horarioIngreso.html',
        controller: 'horarioIngresoCtrl'
      }
    }
  })

  .state('trabajoSocialUNLaR.horario1Cuatrimestre', {
    url: '/page38',
    views: {
      'side-menu21': {
        templateUrl: 'templates/horario1Cuatrimestre.html',
        controller: 'horario1CuatrimestreCtrl'
      }
    }
  })

  .state('trabajoSocialUNLaR.horario2Cuatrimestre', {
    url: '/page39',
    views: {
      'side-menu21': {
        templateUrl: 'templates/horario2Cuatrimestre.html',
        controller: 'horario2CuatrimestreCtrl'
      }
    }
  })

  .state('trabajoSocialUNLaR.gUAUNLaR', {
    url: '/page40',
    views: {
      'side-menu21': {
        templateUrl: 'templates/gUAUNLaR.html',
        controller: 'gUAUNLaRCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/page1')


});
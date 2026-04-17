import React, { useState, useEffect } from 'react';
import { BookOpen, Target, CheckCircle, Clock, Users, Brain, Eye, Lightbulb, Wrench, BarChart3, Zap, Plus, Save, History, ArrowRight, ArrowLeft, Home } from 'lucide-react';

// Types pour la taxonomie de Bloom
const BLOOM_LEVELS = [
  {
    level: 1,
    name: 'Se souvenir',
    description: 'Récupérer des connaissances de la mémoire à long terme',
    verbs: ['définir', 'lister', 'identifier', 'nommer', 'reconnaître', 'rappeler'],
    icon: Brain,
    color: 'bg-red-100 border-red-300 text-red-800'
  },
  {
    level: 2,
    name: 'Comprendre',
    description: 'Construire du sens à partir des messages éducatifs',
    verbs: ['expliquer', 'interpréter', 'résumer', 'classer', 'comparer', 'illustrer'],
    icon: Eye,
    color: 'bg-orange-100 border-orange-300 text-orange-800'
  },
  {
    level: 3,
    name: 'Appliquer',
    description: 'Utiliser une procédure dans une situation donnée',
    verbs: ['exécuter', 'implémenter', 'utiliser', 'démontrer', 'résoudre', 'opérer'],
    icon: Wrench,
    color: 'bg-yellow-100 border-yellow-300 text-yellow-800'
  },
  {
    level: 4,
    name: 'Analyser',
    description: 'Diviser en parties constitutives et déterminer les relations',
    verbs: ['différencier', 'organiser', 'attribuer', 'distinguer', 'examiner', 'structurer'],
    icon: BarChart3,
    color: 'bg-green-100 border-green-300 text-green-800'
  },
  {
    level: 5,
    name: 'Évaluer',
    description: 'Porter des jugements basés sur des critères',
    verbs: ['vérifier', 'critiquer', 'juger', 'tester', 'défendre', 'soutenir'],
    icon: CheckCircle,
    color: 'bg-blue-100 border-blue-300 text-blue-800'
  },
  {
    level: 6,
    name: 'Créer',
    description: 'Réorganiser en une nouvelle structure cohérente',
    verbs: ['générer', 'planifier', 'produire', 'construire', 'inventer', 'concevoir'],
    icon: Lightbulb,
    color: 'bg-purple-100 border-purple-300 text-purple-800'
  }
];

const SMART_CRITERIA = [
  { 
    key: 'specific', 
    name: 'Spécifique', 
    description: 'Objectif clair et précis', 
    icon: Target,
    example: "Au lieu de 'comprendre l'histoire', écrivez 'identifier les causes principales de la Révolution française de 1789'"
  },
  { 
    key: 'measurable', 
    name: 'Mesurable', 
    description: 'Critères de réussite observables', 
    icon: BarChart3,
    example: "Précisez comment mesurer la réussite : 'Lister au moins 5 causes avec leurs contextes' ou 'Réussir un quiz avec 80% de bonnes réponses'"
  },
  { 
    key: 'achievable', 
    name: 'Atteignable', 
    description: 'Réaliste pour les apprenants', 
    icon: CheckCircle,
    example: "Considérez le niveau : 'Adapté aux élèves de 2nde ayant étudié l'Ancien Régime' plutôt qu'un objectif trop ambitieux"
  },
  { 
    key: 'relevant', 
    name: 'Pertinent', 
    description: 'Aligné avec les besoins pédagogiques', 
    icon: Users,
    example: "Montrez le lien : 'Prépare à l'analyse de textes historiques du baccalauréat' ou 'Développe l'esprit critique nécessaire en terminale'"
  },
  { 
    key: 'timebound', 
    name: 'Temporellement défini', 
    description: 'Délai clairement établi', 
    icon: Clock,
    example: "Fixez un délai précis : 'À maîtriser avant l'évaluation du 15 mars' ou 'En 3 séances de 50 minutes sur 2 semaines'"
  }
];

export default function BloomSmartApp() {
  const [currentView, setCurrentView] = useState('home');
  const [objectives, setObjectives] = useState([]);
  const [currentObjective, setCurrentObjective] = useState({
    title: '',
    description: '',
    bloomLevel: null,
    verb: '',
    customVerb: '',
    context: '',
    criteria: '',
    resources: '',
    timeframe: '',
    smartCriteria: {
      specific: '',
      measurable: '',
      achievable: '',
      relevant: '',
      timebound: ''
    }
  });
  const [step, setStep] = useState(0);
  const [showCustomVerb, setShowCustomVerb] = useState(false);

  // Charger les objectifs sauvegardés
  useEffect(() => {
    const saved = localStorage.getItem('bloom-objectives');
    if (saved) {
      setObjectives(JSON.parse(saved));
    }
  }, []);

  // Sauvegarder un objectif
  const saveObjective = () => {
    const newObjective = {
      ...currentObjective,
      id: Date.now(),
      createdAt: new Date().toISOString()
    };
    const updated = [...objectives, newObjective];
    setObjectives(updated);
    localStorage.setItem('bloom-objectives', JSON.stringify(updated));
    
    // Réinitialiser le formulaire
    setCurrentObjective({
      title: '',
      description: '',
      bloomLevel: null,
      verb: '',
      customVerb: '',
      context: '',
      criteria: '',
      resources: '',
      timeframe: '',
      smartCriteria: {
        specific: '',
        measurable: '',
        achievable: '',
        relevant: '',
        timebound: ''
      }
    });
    setStep(0);
    setShowCustomVerb(false);
    setCurrentView('home');
  };

  // Composant Page d'accueil
  const HomePage = () => (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-8">
        <div className="flex justify-center mb-4">
          <BookOpen className="w-16 h-16 text-blue-600" />
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Compétences Bloom SMART Guidées
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Créez des objectifs pédagogiques efficaces en combinant la taxonomie de Bloom 
          avec la méthode SMART pour un apprentissage structuré et mesurable.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <Brain className="w-6 h-6 mr-2 text-blue-600" />
            Taxonomie de Bloom
          </h3>
          <p className="text-gray-600 mb-4">
            Structurez vos objectifs selon les 6 niveaux cognitifs progressifs.
          </p>
          <div className="space-y-2">
            {BLOOM_LEVELS.map((level) => {
              const IconComponent = level.icon;
              return (
                <div key={level.level} className={`p-2 rounded border-l-2 ${level.color.replace('bg-', 'border-l-').split(' ')[1]}`}>
                  <div className="flex items-center">
                    <IconComponent className="w-4 h-4 mr-2" />
                    <span className="font-medium">{level.level}. {level.name}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <Target className="w-6 h-6 mr-2 text-green-600" />
            Méthode SMART
          </h3>
          <p className="text-gray-600 mb-4">
            Rendez vos objectifs concrets et mesurables avec les critères SMART.
          </p>
          <div className="space-y-2">
            {SMART_CRITERIA.map((criteria) => {
              const IconComponent = criteria.icon;
              return (
                <div key={criteria.key} className="p-2 rounded border-l-2 border-l-green-300">
                  <div className="flex items-center">
                    <IconComponent className="w-4 h-4 mr-2 text-green-600" />
                    <span className="font-medium">{criteria.name}</span>
                  </div>
                  <p className="text-sm text-gray-500 ml-6">{criteria.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex justify-center space-x-4">
        <button
          onClick={() => setCurrentView('create')}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 flex items-center transition-colors"
        >
          <Plus className="w-5 h-5 mr-2" />
          Créer un nouvel objectif
        </button>
        <button
          onClick={() => setCurrentView('history')}
          className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 flex items-center transition-colors"
        >
          <History className="w-5 h-5 mr-2" />
          Voir l'historique ({objectives.length})
        </button>
      </div>
    </div>
  );

  // Gestion des changements pour éviter le problème du curseur
  const handleObjectiveChange = (field, value) => {
    setCurrentObjective(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSmartCriteriaChange = (key, value) => {
    setCurrentObjective(prev => ({
      ...prev,
      smartCriteria: {
        ...prev.smartCriteria,
        [key]: value
      }
    }));
  };

  // Composant Assistant de création
  const CreateObjective = () => {
    const steps = [
      'Informations générales',
      'Niveau de Bloom',
      'Critères SMART',
      'Finalisation'
    ];

    const nextStep = () => {
      if (step < steps.length - 1) setStep(step + 1);
    };

    const prevStep = () => {
      if (step > 0) setStep(step - 1);
    };

    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Création d'objectif pédagogique</h2>
          <button
            onClick={() => setCurrentView('home')}
            className="text-gray-600 hover:text-gray-800 flex items-center"
          >
            <Home className="w-5 h-5 mr-1" />
            Accueil
          </button>
        </div>

        {/* Barre de progression */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            {steps.map((stepName, index) => (
              <div key={index} className={`flex items-center ${index <= step ? 'text-blue-600' : 'text-gray-400'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 
                  ${index <= step ? 'border-blue-600 bg-blue-100' : 'border-gray-300'}`}>
                  {index < step ? <CheckCircle className="w-5 h-5" /> : <span>{index + 1}</span>}
                </div>
                <span className="ml-2 hidden md:block">{stepName}</span>
              </div>
            ))}
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((step + 1) / steps.length) * 100}%` }}
            />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          {/* Étape 1: Informations générales */}
          {step === 0 && (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-4">Informations générales</h3>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Titre de l'objectif *
                </label>
                <input
                  type="text"
                  value={currentObjective.title}
                  onChange={(e) => handleObjectiveChange('title', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Ex: Analyser les causes de la Révolution française"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description détaillée
                </label>
                <textarea
                  value={currentObjective.description}
                  onChange={(e) => handleObjectiveChange('description', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 h-24"
                  placeholder="Décrivez plus précisément ce que les apprenants devront accomplir..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Contexte d'apprentissage
                </label>
                <input
                  type="text"
                  value={currentObjective.context}
                  onChange={(e) => handleObjectiveChange('context', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Ex: Cours d'histoire niveau seconde, chapitre sur l'Ancien Régime"
                />
              </div>
            </div>
          )}

          {/* Étape 2: Niveau de Bloom */}
          {step === 1 && (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-4">Choisissez le niveau cognitif (Bloom)</h3>
              
              <div className="grid gap-4">
                {BLOOM_LEVELS.map((level) => {
                  const IconComponent = level.icon;
                  const isSelected = currentObjective.bloomLevel?.level === level.level;
                  
                  return (
                    <div
                      key={level.level}
                      onClick={() => setCurrentObjective({
                        ...currentObjective, 
                        bloomLevel: level,
                        verb: '',
                        customVerb: ''
                      })}
                      className={`p-4 rounded-lg border-2 cursor-pointer transition-all
                        ${isSelected ? level.color + ' border-opacity-100' : 'border-gray-200 hover:border-gray-300'}
                      `}
                    >
                      <div className="flex items-start">
                        <IconComponent className="w-6 h-6 mr-3 mt-1" />
                        <div className="flex-1">
                          <h4 className="font-semibold">Niveau {level.level}: {level.name}</h4>
                          <p className="text-sm text-gray-600 mb-2">{level.description}</p>
                          <div className="flex flex-wrap gap-1">
                            <span className="text-xs text-gray-500">Verbes d'action:</span>
                            {level.verbs.map((verb) => (
                              <span key={verb} className="text-xs bg-gray-100 px-2 py-1 rounded">
                                {verb}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {currentObjective.bloomLevel && (
                <div className="mt-4 space-y-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Choisissez un verbe d'action *
                  </label>
                  <select
                    value={currentObjective.verb}
                    onChange={(e) => {
                      const selectedVerb = e.target.value;
                      if (selectedVerb === 'custom') {
                        setShowCustomVerb(true);
                        setCurrentObjective({...currentObjective, verb: '', customVerb: ''});
                      } else {
                        setShowCustomVerb(false);
                        setCurrentObjective({...currentObjective, verb: selectedVerb, customVerb: ''});
                      }
                    }}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Sélectionnez un verbe...</option>
                    {currentObjective.bloomLevel.verbs.map((verb) => (
                      <option key={verb} value={verb}>{verb}</option>
                    ))}
                    <option value="custom">+ Ajouter un verbe personnalisé</option>
                  </select>
                  
                  {showCustomVerb && (
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Votre verbe personnalisé *
                      </label>
                      <input
                        type="text"
                        value={currentObjective.customVerb}
                        onChange={(e) => handleObjectiveChange('customVerb', e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Tapez votre verbe d'action..."
                      />
                      <p className="text-xs text-gray-600 mt-2">
                        Assurez-vous que ce verbe correspond bien au niveau cognitif "{currentObjective.bloomLevel.name}"
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Étape 3: Critères SMART */}
          {step === 2 && (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-4">Critères SMART</h3>
              
              {SMART_CRITERIA.map((criteria) => {
                const IconComponent = criteria.icon;
                return (
                  <div key={criteria.key} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <IconComponent className="w-5 h-5 mr-2 text-blue-600" />
                      <label className="block text-sm font-medium text-gray-700">
                        {criteria.name}
                      </label>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{criteria.description}</p>
                    
                    {/* Exemple d'aide */}
                    <div className="bg-blue-50 border-l-4 border-blue-300 p-3 mb-3">
                      <p className="text-xs text-blue-800">
                        <strong>💡 Exemple :</strong> {criteria.example}
                      </p>
                    </div>
                    
                    <textarea
                      value={currentObjective.smartCriteria[criteria.key]}
                      onChange={(e) => handleSmartCriteriaChange(criteria.key, e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 h-20"
                      placeholder={`Décrivez comment cet objectif est ${criteria.name.toLowerCase()}...`}
                    />
                  </div>
                );
              })}
            </div>
          )}

          {/* Étape 4: Finalisation */}
          {step === 3 && (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-4">Finalisation</h3>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Critères d'évaluation
                </label>
                <textarea
                  value={currentObjective.criteria}
                  onChange={(e) => handleObjectiveChange('criteria', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 h-24"
                  placeholder="Comment allez-vous évaluer la réussite de cet objectif ?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Ressources nécessaires
                </label>
                <textarea
                  value={currentObjective.resources}
                  onChange={(e) => handleObjectiveChange('resources', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 h-24"
                  placeholder="Quelles ressources les apprenants auront-ils besoin ?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Délai / Durée estimée
                </label>
                <input
                  type="text"
                  value={currentObjective.timeframe}
                  onChange={(e) => handleObjectiveChange('timeframe', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Ex: 2 séances de 50 minutes, à terminer avant la fin du trimestre"
                />
              </div>

              {/* Aperçu de l'objectif */}
              <div className="bg-blue-50 p-4 rounded-lg mt-6">
                <h4 className="font-semibold mb-2">Aperçu de votre objectif :</h4>
                <p className="text-sm">
                  <strong>"{currentObjective.title}"</strong>
                  {(currentObjective.verb || currentObjective.customVerb) && currentObjective.bloomLevel && (
                    <>
                      {' '}— Les apprenants devront <em>{currentObjective.verb || currentObjective.customVerb}</em> (niveau {currentObjective.bloomLevel.name})
                    </>
                  )}
                  {currentObjective.context && (
                    <>
                      {' '}dans le contexte suivant : {currentObjective.context}
                    </>
                  )}
                </p>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between mt-8">
            <button
              onClick={prevStep}
              disabled={step === 0}
              className="flex items-center px-4 py-2 text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ArrowLeft className="w-4 h-4 mr-1" />
              Précédent
            </button>

            {step < steps.length - 1 ? (
              <button
                onClick={nextStep}
                disabled={
                  (step === 0 && !currentObjective.title) ||
                  (step === 1 && (!currentObjective.bloomLevel || (!currentObjective.verb && !currentObjective.customVerb)))
                }
                className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Suivant
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            ) : (
              <button
                onClick={saveObjective}
                className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                <Save className="w-4 h-4 mr-1" />
                Sauvegarder l'objectif
              </button>
            )}
          </div>
        </div>
      </div>
    );
  };

  // Composant Historique
  const HistoryView = () => (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Historique des objectifs</h2>
        <button
          onClick={() => setCurrentView('home')}
          className="text-gray-600 hover:text-gray-800 flex items-center"
        >
          <Home className="w-5 h-5 mr-1" />
          Accueil
        </button>
      </div>

      {objectives.length === 0 ? (
        <div className="text-center py-8">
          <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-500">Aucun objectif créé pour le moment.</p>
          <button
            onClick={() => setCurrentView('create')}
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Créer votre premier objectif
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {objectives.map((objective) => {
            const IconComponent = objective.bloomLevel?.icon || BookOpen;
            return (
              <div key={objective.id} className="bg-white p-6 rounded-lg shadow-md border">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start">
                    <IconComponent className="w-6 h-6 mr-3 mt-1 text-blue-600" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">{objective.title}</h3>
                      {objective.bloomLevel && (
                        <span className={`inline-block px-2 py-1 rounded text-xs font-medium mt-1 ${objective.bloomLevel.color}`}>
                          Niveau {objective.bloomLevel.level}: {objective.bloomLevel.name}
                        </span>
                      )}
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">
                    {new Date(objective.createdAt).toLocaleDateString('fr-FR')}
                  </span>
                </div>

                {objective.description && (
                  <p className="text-gray-600 mb-3">{objective.description}</p>
                )}

                {objective.verb || objective.customVerb && objective.context && (
                  <p className="text-sm text-gray-500 mb-3">
                    <strong>Action :</strong> {objective.verb || objective.customVerb} • <strong>Contexte :</strong> {objective.context}
                  </p>
                )}

                {objective.timeframe && (
                  <p className="text-sm text-gray-500">
                    <Clock className="w-4 h-4 inline mr-1" />
                    {objective.timeframe}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );

  // Rendu principal
  return (
    <div className="min-h-screen bg-gray-50">
      {currentView === 'home' && <HomePage />}
      {currentView === 'create' && <CreateObjective />}
      {currentView === 'history' && <HistoryView />}
    </div>
  );
}
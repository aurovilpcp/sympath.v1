import React, { useState } from 'react';
import { Upload, Play, Clock, Star, CheckCircle, ArrowRight, Headphones, Music, Award, Users, Mic, Phone, MessageCircle } from 'lucide-react';

const PostProduction: React.FC = () => {
  const [selectedTier, setSelectedTier] = useState('premium');
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [formData, setFormData] = useState({
    projectName: '',
    genre: '',
    referenceTrack: '',
    additionalNotes: '',
    voiceNote: null as File | null,
    callRequested: false
  });

  const tiers = [
    {
      id: 'basic',
      name: 'Basic Mix',
      price: '₹2,999',
      delivery: '48-72 hours',
      revisions: '2 revisions',
      features: [
        'Professional mixing',
        'EQ and compression',
        'Basic mastering',
        'Stereo output',
        'Standard quality check'
      ],
      popular: false
    },
    {
      id: 'premium',
      name: 'Premium Mix & Master',
      price: '₹4,999',
      delivery: '24-48 hours',
      revisions: '3 revisions',
      features: [
        'Advanced mixing',
        'Professional mastering',
        'Stereo + stems delivery',
        'Reference track matching',
        'LUFS optimization',
        'Quality assurance'
      ],
      popular: true
    },
    {
      id: 'industry',
      name: 'Industry Standard',
      price: '₹7,999',
      delivery: '24 hours',
      revisions: 'Unlimited revisions',
      features: [
        'Industry-grade mixing',
        'Broadcast-ready mastering',
        'Multiple format delivery',
        'A&R quality standards',
        'Priority support',
        'Engineer consultation'
      ],
      popular: false
    }
  ];

  const engineers = [
    {
      name: 'Arjun Mehta',
      specialties: ['Hip-Hop', 'R&B', 'Pop'],
      experience: '8+ years',
      rating: 4.9,
      completedProjects: 500,
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
      credits: ['Major Label Releases', 'Bollywood Films', 'International Artists']
    },
    {
      name: 'Priya Sharma',
      specialties: ['Rock', 'Alternative', 'Indie'],
      experience: '6+ years',
      rating: 4.8,
      completedProjects: 350,
      avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
      credits: ['Independent Albums', 'Live Recordings', 'Podcast Production']
    },
    {
      name: 'Rahul Singh',
      specialties: ['Electronic', 'EDM', 'Ambient'],
      experience: '10+ years',
      rating: 4.9,
      completedProjects: 750,
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
      credits: ['Festival Headliners', 'Commercial Sync', 'Award Winners']
    }
  ];

  const workflowSteps = [
    {
      step: 1,
      title: 'Upload Your Stems',
      description: 'Upload your recorded tracks in high-quality format (WAV/AIFF only)',
      icon: <Upload className="w-6 h-6" />
    },
    {
      step: 2,
      title: 'Choose Your Tier',
      description: 'Select the service level that fits your needs and budget',
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      step: 3,
      title: 'Expert Assignment',
      description: 'AI matches your project to the perfect engineer based on genre and style',
      icon: <Users className="w-6 h-6" />
    },
    {
      step: 4,
      title: 'Professional Processing',
      description: 'Your tracks are mixed and mastered by certified experts',
      icon: <Headphones className="w-6 h-6" />
    },
    {
      step: 5,
      title: 'Quality Delivery',
      description: 'Receive your professional-grade audio files with revisions if needed',
      icon: <Award className="w-6 h-6" />
    }
  ];

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    // Filter for WAV and AIFF files only
    const validFiles = files.filter(file => 
      file.type === 'audio/wav' || 
      file.type === 'audio/aiff' || 
      file.name.toLowerCase().endsWith('.wav') || 
      file.name.toLowerCase().endsWith('.aiff')
    );
    
    if (validFiles.length !== files.length) {
      alert('Only WAV and AIFF files are accepted for professional mixing.');
    }
    
    setUploadedFiles(prev => [...prev, ...validFiles]);
  };

  const handleVoiceNoteUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFormData(prev => ({ ...prev, voiceNote: file }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', { formData, uploadedFiles, selectedTier });
    alert('Project submitted successfully! Our team will contact you shortly.');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Expert Post-Production Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional mixing and mastering by certified audio engineers. 
            Industry-standard results with guaranteed quality.
          </p>
        </div>

        {/* Workflow Steps */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {workflowSteps.map((step, index) => (
              <div key={step.step} className="text-center">
                <div className="relative">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center text-gray-700 mx-auto mb-4">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>
                  {index < workflowSteps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gray-200 -translate-x-1/2"></div>
                  )}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Service Tiers */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Choose Your Service Tier
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tiers.map((tier) => (
              <div
                key={tier.id}
                className={`relative bg-white rounded-lg p-8 border-2 transition-all duration-300 cursor-pointer ${
                  selectedTier === tier.id
                    ? 'border-gray-900 shadow-lg'
                    : 'border-gray-200 hover:border-gray-300'
                } ${tier.popular ? 'ring-2 ring-gray-900 ring-opacity-20' : ''}`}
                onClick={() => setSelectedTier(tier.id)}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gray-900 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                  <div className="text-3xl font-bold text-gray-900 mb-1">{tier.price}</div>
                  <div className="text-sm text-gray-500">{tier.delivery}</div>
                  <div className="text-sm text-gray-500">{tier.revisions}</div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button
                  className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                    selectedTier === tier.id
                      ? 'bg-gray-900 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {selectedTier === tier.id ? 'Selected' : 'Select Plan'}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Comprehensive Upload Form */}
        <div className="bg-white rounded-lg p-8 mb-16 border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Project Details & Upload
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Project Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Project Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.projectName}
                  onChange={(e) => setFormData(prev => ({ ...prev, projectName: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                  placeholder="Enter your project name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Genre *
                </label>
                <select
                  required
                  value={formData.genre}
                  onChange={(e) => setFormData(prev => ({ ...prev, genre: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                >
                  <option value="">Select Genre</option>
                  <option value="hip-hop">Hip-Hop</option>
                  <option value="pop">Pop</option>
                  <option value="rock">Rock</option>
                  <option value="electronic">Electronic</option>
                  <option value="r&b">R&B</option>
                  <option value="jazz">Jazz</option>
                  <option value="classical">Classical</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            {/* File Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Upload Audio Files (WAV/AIFF only) *
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-colors">
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Drag and drop your audio files here
                </h3>
                <p className="text-gray-600 mb-4">
                  Only WAV and AIFF files accepted for professional quality
                </p>
                <input
                  type="file"
                  multiple
                  accept=".wav,.aiff"
                  onChange={handleFileUpload}
                  className="hidden"
                  id="file-upload"
                />
                <label
                  htmlFor="file-upload"
                  className="bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors cursor-pointer inline-block"
                >
                  Choose Files
                </label>
              </div>
              
              {uploadedFiles.length > 0 && (
                <div className="mt-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Uploaded Files:</h4>
                  <div className="space-y-2">
                    {uploadedFiles.map((file, index) => (
                      <div key={index} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                        <div className="flex items-center">
                          <Music className="w-5 h-5 text-gray-600 mr-3" />
                          <span className="text-gray-700">{file.name}</span>
                        </div>
                        <span className="text-sm text-gray-500">
                          {(file.size / (1024 * 1024)).toFixed(2)} MB
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Reference Track */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Reference Track/Links
              </label>
              <input
                type="text"
                value={formData.referenceTrack}
                onChange={(e) => setFormData(prev => ({ ...prev, referenceTrack: e.target.value }))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                placeholder="Paste YouTube/Spotify links or track names for reference"
              />
            </div>

            {/* Additional Notes */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Additional Notes & Vision
              </label>
              <textarea
                rows={4}
                value={formData.additionalNotes}
                onChange={(e) => setFormData(prev => ({ ...prev, additionalNotes: e.target.value }))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                placeholder="Describe your vision, specific requirements, or any special instructions for the engineer..."
              />
            </div>

            {/* Voice Note Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Voice Message (Optional)
              </label>
              <div className="flex items-center space-x-4">
                <input
                  type="file"
                  accept="audio/*"
                  onChange={handleVoiceNoteUpload}
                  className="hidden"
                  id="voice-upload"
                />
                <label
                  htmlFor="voice-upload"
                  className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors cursor-pointer"
                >
                  <Mic className="w-4 h-4 mr-2" />
                  Upload Voice Note
                </label>
                {formData.voiceNote && (
                  <span className="text-sm text-gray-600">
                    Voice note uploaded: {formData.voiceNote.name}
                  </span>
                )}
              </div>
            </div>

            {/* Call Request */}
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                id="call-request"
                checked={formData.callRequested}
                onChange={(e) => setFormData(prev => ({ ...prev, callRequested: e.target.checked }))}
                className="w-4 h-4 text-gray-900 border-gray-300 rounded focus:ring-gray-500"
              />
              <label htmlFor="call-request" className="flex items-center text-sm text-gray-700">
                <Phone className="w-4 h-4 mr-2" />
                Request a call with the engineer for additional clarifications
              </label>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors flex items-center"
              >
                Submit Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </form>
        </div>

        {/* Expert Engineers */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Meet Our Expert Engineers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {engineers.map((engineer, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow border border-gray-200">
                <img
                  src={engineer.avatar}
                  alt={engineer.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="font-bold text-gray-900 mb-2">{engineer.name}</h3>
                <div className="flex items-center justify-center mb-3">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium text-gray-700 ml-1">
                    {engineer.rating}
                  </span>
                  <span className="text-sm text-gray-500 ml-2">
                    ({engineer.completedProjects} projects)
                  </span>
                </div>
                <div className="mb-4">
                  <div className="text-sm text-gray-600 mb-2">{engineer.experience} experience</div>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {engineer.specialties.map((specialty, specIndex) => (
                      <span
                        key={specIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-md"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="text-xs text-gray-500">
                  {engineer.credits.join(' • ')}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gray-900 rounded-lg p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">
            Ready to Get Professional Results?
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Upload your tracks now and get industry-standard mixing and mastering 
            from our certified audio engineers.
          </p>
          <button className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center">
            Start Your Project
            <ArrowRight className="ml-2 w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostProduction;